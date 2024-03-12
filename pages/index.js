import Head from "next/head";
import axios from "axios";
import { useState } from "react";
import SVG from "react-inlinesvg";

export default function Home() {
  const [input, setInput] = useState(null);
  const [size, setSize] = useState("150");
  const [backcolor, setBackColor] = useState("FFFFFF");
  const [forecolor, setForeColor] = useState("000000");
  const [level, setLevel] = useState("M");
  const [response, setResponse] = useState(null);

  const getQrCode = async () => {
    try {
      const res = await axios.get("api/generate-qrcode/", {
        params: { input, size, backcolor, forecolor, level },
      });

      setResponse(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const downloadQrCode = () => {
    const url = window.URL.createObjectURL(new Blob([response]));
    const urlObject = document.createElement("a");
    urlObject.href = url;
    urlObject.setAttribute("download", "qrcode.svg");
    document.body.appendChild(urlObject);
    urlObject.click();
  };

  return (
    <div className="flex flex-col items-center">
      
      <h1 className="font-ojuju text-primary text-6xl md:text-4xl pt-20 pb-6">
        QR Code Generator
      </h1>

      <input
        type="text"
        placeholder="Enter content - link, text or number"
        className="text-primary text-base md:text-xs w-1/2 md:w-4/5 p-3 mt-10 mb-6 bg-secondary border-double border-b-4 border-b-primary border-r-4 border-r-primary rounded outline-none"
        onChange={(e) => setInput(e.target.value)}
      ></input>
      <input
        type="number"
        placeholder="Enter size (default is 150px)"
        className="text-primary text-base md:text-xs w-1/2 md:w-4/5 p-3 mt-4 mb-6 bg-secondary border-double border-b-4 border-b-primary border-r-4 border-r-primary rounded outline-none"
        onChange={(e) => setSize(Math.min(4000, Math.max(40, e.target.value)))}
        max={4000}
        min={40}
      ></input>
      <input
        type="text"
        placeholder="Enter background color in HEX (default is FFFFFF)"
        className="text-primary text-base md:text-xs w-1/2 md:w-4/5 p-3 mt-4 mb-6 bg-secondary border-double border-b-4 border-b-primary border-r-4 border-r-primary rounded outline-none"
        onChange={(e) => setBackColor(e.target.value)}
      ></input>
      <input
        type="text"
        placeholder="Enter foreground color in HEX (default is 000000)"
        className="text-primary text-base md:text-xs w-1/2 md:w-4/5 p-3 mt-4 mb-6 bg-secondary border-double border-b-4 border-b-primary border-r-4 border-r-primary rounded outline-none"
        onChange={(e) => setForeColor(e.target.value)}
      ></input>
      <select
        className="text-primary text-base md:text-xs w-1/2 md:w-4/5 p-3 mt-4 mb-6 bg-secondary border-double border-b-4 border-b-primary border-r-4 border-r-primary rounded outline-none"
        onChange={(e) => setLevel(e.target.value)}>
        <option value="" disabled selected className="p-3">Select error correction level (default is M)</option>
        <option value="L" className="p-3">Low 7%</option>
        <option value="M" className="p-3">Medium 15%</option>
        <option value="Q" className="p-3">Quartile 25%</option>
        <option value="H" className="p-3">High 30%</option>
      </select>
      <button
        className="bg-primary text-secondary text-2xl md:text-lg font-dosis uppercase mt-10 mb-10 p-4 rounded border-dashed border-secondary border-2 inline-flex hover:opacity-80"
        onClick={() => getQrCode()}>
        Generate
      </button>

      {response && (
        <div className="mt-20 flex flex-col items-center border-dotted border-secondary border-2 p-5">
          <SVG src={response} />
          <button
            className="bg-primary text-secondary text-lg md:text-sm font-dosis uppercase mt-5 p-4 rounded border-dashed border-secondary border-2 inline-flex hover:opacity-80"
            onClick={() => downloadQrCode()}>
            Download
          </button>
        </div>
      )}
      
      <div className="flex justify-center items-end h-52 md:h-44">
        <p className="text-primary text-base md:text-xs font-dosis pb-8">
          © Created and developed by {" "}
          <a className="underline" href="https://rumeysagelgi.com/" target="_blank">
            Rumeysa Gelgi
          </a>
          {" "} | 2024
        </p>
      </div>
    </div>
  );
}
