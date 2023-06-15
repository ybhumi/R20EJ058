const express = require("express");
const app = express();
const PORT = 8008;
const axios = require("axios");
const TIMEOUT = 500;

//GET request

app.get("/numbers", async (req, res) => {
  const urls = req.query.url;

  if (!urls || !Array.isArray(urls)) {
    return res
      .status(400)
      .json({ error: 'Invalid or missing "url" parameter' });
  }

  try {
    const requests = urls.map((url) => axios.get(url, { timeout: TIMEOUT }));
    const responses = await Promise.allSettled(requests);

    const validResponses = responses
      .filter((response) => response.status === "fulfilled")
      .map((response) => response.value.data.numbers)
      .flat();

    const mergedNumbers = [...new Set(validResponses)].sort((a, b) => a - b);

    return res.json({ numbers: mergedNumbers });
  } catch (error) {
    return res.status(500).json({ error: "Internal server error" });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`number-management-service is running on port ${PORT}`);
});
