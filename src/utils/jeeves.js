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

    numericSet(question) {
        const numberList = question.substring(1,question.length-1).trim().split(' ');
        const numbers = numberList.map(Number).sort((a, b) => a - b);
        let even = [];
        let odd = [];

        while (numbers.length > 1) {
            let smallValueIndex = 0;
            while (numbers[numbers.length-1]%2 === numbers[smallValueIndex]%2) {
                smallValueIndex+=1;
            }

            if (numbers[smallValueIndex]%2 === 0)
                even.unshift(Number(numbers.pop()) + Number(numbers.splice(smallValueIndex, 1)));
            else
                odd.push(Number(numbers.pop()) + Number(numbers.splice(smallValueIndex, 1)));
        }
        
        return odd.concat(even).join(" ");
    }
}

const jeeves = new Jeeves();
module.exports = jeeves;