const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

const ACCESS_CODE = '12/13'; // Secret password

// Endpoint to verify the password
app.post('/verify-password', (req, res) => {
    const { password } = req.body;
    if (password === ACCESS_CODE) {
        return res.json({ success: true });
    }
    res.json({ success: false });
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
