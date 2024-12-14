const functions = require("firebase-functions");
const cors = require("cors");
const axios = require("axios");

// Enable CORS
const corsHandler = cors({ origin: true });

// Define the Cloud Function
exports.longdoRequest = functions.https.onRequest((req, res) => {
  corsHandler(req, res, async () => {
    try {
      // Ensure it's a POST request
      if (req.method !== "POST") {
        return res.status(405).send("Only POST requests are allowed");
      }

      // Validate the input
      const { word } = req.body;
      if (!word) {
        return res.status(400).send("Word is required");
      }

      // Construct the Longdo API URL
      const url = `https://dict.longdo.com/search/${encodeURIComponent(word)}`;

      // Make the request to Longdo API
      const response = await axios.get(url);

      // Return the response data to the client
      return res.status(200).json({ result: response.data });
    } catch (error) {
      console.error("Error making Longdo request:", error.message);
      return res.status(500).send("Error making request to Longdo API");
    }
  });
});
