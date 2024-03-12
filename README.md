# QR CODE GENERATOR APP

## Demonstration Link:
https://qrcode-generator-app-with-api-rumeysa-gelgis-projects.vercel.app

## Description:
QR Code Generator is a user-friendly tool for generating top notch QR codes with multiple customization options.

## Features:
- QR Code generating for any link, text or number input
- High quality size (up to 4000px)
- Background and foreground color change
- Error correction level options
- Downloadable as SVG file
- Responsive and mobile-friendly for all devices
- Single-page application
- Server-side rendering

## Tech Stack:
- **Next.js:** a JavaScript framework for building full-stack web applications with React
- **Tailwind CSS:** a utility-first CSS framework with predefined classes for responsive and visually appealing designs
- **Axios:** a promise-based HTTP library for making API requests and fetching data
- Powered by **<a href="https://rapidapi.com/digicatech/api/qrcodeutils/" target="_blank">qrcodeutils API</a>** on **<a href="https://rapidapi.com/hub" target="_blank">RapidAPI Hub</a>**

## How to Run:
Download the project and unzip it. 

Navigate to the project's root directory on your terminal.

Install dependencies with `npm install`.

Create `.env.local` file.

Go to <a href="https://rapidapi.com/hub" target="_blank">RapidAPI Hub</a> on your browser and create or sign in to an account. Go to <a href="https://rapidapi.com/digicatech/api/qrcodeutils/" target="_blank">qrcodeutils API</a> and subscribe to it (Pro plan for color change option). Now you will have a `x-rapidapi-key`.

Open `.env.local` file and paste `NEXT_PUBLIC_RAPIDAPI_KEY=YOUR-RAPIDAPI-KEY`. Replace `YOUR-RAPIDAPI-KEY` with your own API key.

Run the app with `npm run dev` and open https://localhost:3000

## Files:
<ins>***components***</ins> :

- ***layout.js*** : Container for the overall structure of the application.
  
- ***seo.js*** : Stores HTML head and meta tags.

<ins>***pages***</ins> :

- ***_app.js*** : Exports a custom App component to define global behavior.

- ***index.js*** : Main entry point for the application. Stores two functions `getQrCode()` and `downloadQrCode()` as well as API parameter input fields.

- ***api/generate-qrcode.js*** : API endpoint for generating QR codes.

<ins>***tailwind.config.js***</ins> : Stores Tailwind CSS configurations.

