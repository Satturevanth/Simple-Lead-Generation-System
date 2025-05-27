const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.post('/api/submit-lead', async (req, res) => {
  const { name, email, company, message } = req.body;
  if (!name || !email) return res.status(400).json({ error: "Name and email required" });

  try {
    await axios.post('https://satturevanth2121.app.n8n.cloud/webhook-test/60c47762-5f8d-439a-ab96-57cb472ec386', {
      name, email, company, message
    });
    return res.status(200).json({ message: "Lead sent successfully!" });
  } catch (error) {
    console.error("Error sending to n8n:", error.message);
    return res.status(500).json({ error: "Failed to forward to n8n" });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
