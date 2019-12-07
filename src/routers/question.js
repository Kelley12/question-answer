const express = require('express');
const router = new express.Router()

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