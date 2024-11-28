const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.json({
        city: "Dwarka",
        state: "Delhi",
        country: "India",
        slack_id: "U06DS214ULB",
        extra: "Fun Fact about me : For breakfast, I take a bag of sugar, and a spoon. Then I start shoveling it into my mouth."
    });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
