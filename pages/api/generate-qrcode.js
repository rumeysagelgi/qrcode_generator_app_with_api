import axios from "axios";

export default async function handler(req, res) {
  if (req.method === "GET") {
    const options = {
      method: "GET",
      url: "https://qrcodeutils.p.rapidapi.com/qrcodepro",
      params: {
        text: req.query.input || "This is an empty QR Code",
        validate: "true",
        size: req.query.size || "150",
        type: "svg",
        level: req.query.level || "M",
        backcolor: req.query.backcolor || 'FFFFFF',
        forecolor: req.query.forecolor || '000000',
      },
      headers: {
        "x-rapidapi-host": "qrcodeutils.p.rapidapi.com",
        "x-rapidapi-key": process.env.NEXT_PUBLIC_RAPIDAPI_KEY,
      },
    };

    axios
      .request(options).then(function (response) {
        res.status(200).json(response.data);
      }).catch(function (error) {
        console.error(error);
      });
  } else {
    res.status(400);
  }
}
