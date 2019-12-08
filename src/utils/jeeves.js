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

    listSorting(question) {
        const matrix = question.split('\n');
        const columns = matrix.shift().trim().split('');

        return this.matrixSort(matrix, columns, []).join("");
    }

    matrixSort(matrix, columns, result) {
        for (let i=0; i<matrix.length; i++) {
            let row = matrix[i].split('');
            let letter = row.shift();
            
            for (let col=0; col<row.length; col++) {
                if (row[col] === '=') {
                    if (!result.includes(letter))
                        result.push(letter);
                    break;
                } else if (row[col] === '<') {
                    if (result.includes(letter)) {
                        if (result.includes(columns[col])){
                            if(result.indexOf(letter) > result.indexOf(columns[col])) {
                                result.splice(result.indexOf(columns[col]),1);
                                result.splice(result.indexOf(letter)+1, 0, columns[col]);
                                return this.matrixSort(matrix, columns, result);
                            }
                        } else {
                            result.splice(result.indexOf(letter), 0, columns[col]);
                        }
                    } else {
                        if (result.includes(columns[col])) {
                            result.splice(result.indexOf(columns[col]), 0, letter);
                        } else {
                            result.push(letter);
                            result.push(columns[col]);
                        }
                    }
                } else if (row[col] === '>') {
                    if (result.includes(letter)) {
                        if (result.includes(columns[col])){
                            if(result.indexOf(letter) < result.indexOf(columns[col])) {
                                result.splice(result.indexOf(letter),1);
                                result.splice(result.indexOf(columns[col])+1, 0, letter);
                                return this.matrixSort(matrix, columns, result);
                            }
                        } else {
                            result.splice(result.indexOf(letter), 0, columns[col]);
                        }
                    } else {
                        if (result.includes(columns[col])) {
                            result.splice(result.indexOf(columns[col])+1, 0, letter);
                        } else {
                            result.push(columns[col]);   
                            result.push(letter);
                        }
                    }
                }
            }
        }
        return result;
    }
}

const jeeves = new Jeeves();
module.exports = jeeves;