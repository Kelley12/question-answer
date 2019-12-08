class Jeeves {
    constructor() {
        this.dict = {
            "DING": "DONG",
            "PING": "PONG",
            "MARCO": "POLO",
            "name": "Blake Kelley",
            "quest": "coding"
        };
    }

    standardQuestion(question) {
        if (question.includes("What is your")) {
            const key = question.substring(13, question.length-1);
            return this.dict[key];
        }
        return "https://github.com/Kelley12/question-answer";
    }

}

const jeeves = new Jeeves();
module.exports = jeeves;