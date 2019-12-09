const express = require('express');
const router = new express.Router();
const parser = require("../utils/parser");

router.get('/', async (req, res) => {
    const header = "<h1>Web Service Usage:</h1>";
    const usage = "<p>Enter a question using the query string parameter 'q'.</p>";
    const example = `<p><b>Example:</b>`;
    const link = `<a href='${req.headers.host}/question?q=question text'>${req.headers.host}/question?q=question text</a></p>`;

    return res.send(`${header} ${usage} ${example} ${link}`);
});

// GET /question?q=plain text question
router.get('/question', async (req, res) => {
    try {
        const question = req.query.q;

        if(!question) {
            return res.status(400).send("Please provide a question.");
        }

        response = parser(question);

        return res.send(response);
    } catch(e) {
        return res.status(500).send("Internal Server Error. Please try again.");
    }
});

module.exports = router;