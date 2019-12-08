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


    mathEquation(question) {
        const regex = /[ ]*[+][ ]*/g
        const numbers = question.substring(0,question.indexOf('=')-1).split(regex);
        return numbers.reduce((a, v) => parseInt(a) + parseInt(v), 0).toString();
    }

}

const jeeves = new Jeeves();
module.exports = jeeves;