const jeeves = require("./jeeves");

const standardQuestion = /([a-zA-Z]+[ ]*)+[?]$/g;
const randomWords = /([a-zA-Z]+[ ]*)+$/g;
const mathEquation = /([0-9]+\s[+|=]\s)+[?]/g;
const numericSet = /^[<]([0-9\s])+[>]$/g;
const listSort = /\s[A-Z]+\r\n(([A-Z][-<>=]+)\s*)+/gm

const parser = (question) => {
    if (question.match(standardQuestion)) {
        return jeeves.standardQuestion(question);
    } else if (question.match(randomWords)) {
        if (question.split(' ').length === 1 && jeeves.dict[question])
            return jeeves.dict[question];
        return jeeves.randomWords(question);
    } else if (question.match(mathEquation)) {
        return jeeves.mathEquation(question);
    } else if (question.match(numericSet)) {
        return jeeves.numericSet(question);
    } else if (question.match(listSort)) {
        return jeeves.listSorting(question);
    } else {
        return "Unable to answer your question";
    }
}

module.exports = parser