const express = require('express');
const router = new express.Router()

router.get('/', (req, res) => {
    const header = "<h1>Web Service Usage:</h1>";
    const usage = "<p>Enter a question using the query string parameter 'q'.</p>";
    const example = `<p><b>Example:</b>`;
    const link = `<a href='${req.headers.host}/question?q=question text'>${req.headers.host}/question?q=question text</a></p>`;

    res.send(`${header} ${usage} ${example} ${link}`);
});

// GET /question?q=plain text question
router.get('/question', (req, res) => {
    try {
        const question = req.query.q;

        if(!question) {
            res.status(400).send("Please provide a question.");
        }

        res.send(`Received your question: ${question}`);
    } catch(e) {
        res.status(500).send("Internal Server Error. Please try again.");
    }
});

module.exports = router;