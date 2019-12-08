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

    randomWords(question) {
        const wordCount = question.split(" ").length;
        const vowels = 'aeiouAEIOU'
        let vowelCount = 0;
        let consonentCount = 0;

        question.split('').forEach((letter) => {
            if (vowels.indexOf(letter) !== -1)
                vowelCount += 1;
            else if (letter !== ' ')
                consonentCount += 1;
        });

        return `${wordCount}-${consonentCount}-${vowelCount}`;
    }

    mathEquation(question) {
        const regex = /[ ]*[+][ ]*/g
        const numbers = question.substring(0,question.indexOf('=')-1).split(regex);
        return numbers.reduce((a, v) => parseInt(a) + parseInt(v), 0).toString();
    }

}

const jeeves = new Jeeves();
module.exports = jeeves;