
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Welcome to the API');
});

app.get('/api', (req, res) => {
    res.json({
        city: "Dwaraka",
        state: "Delhi",
        country: "India",
        slack_id: "U06DS214ULB",
        extra: "im human"
    });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});