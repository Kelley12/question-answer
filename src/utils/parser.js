const jeeves = require("./jeeves");

const standardQuestion = /([a-zA-Z]+[ ]*)+[?]$/g;
const randomWords = /([a-zA-Z]+[ ]*)+$/g;
const mathEquation = /([0-9]+\s[+|=]\s)+[?]/g;
const numericSet = /^[<]([0-9\s])+[>]$/g;
const listSort = /^[A-E]+\s(([A-E][-<>=]+)\s)+/gm

const parser = (question) => {
    if (question.match(standardQuestion)) {
        return jeeves.standardQuestion(question);
    } else if (question.match(randomWords)) {
    } else if (question.match(mathEquation)) {
        return jeeves.mathEquation(question);
    } else if (question.match(numericSet)) {
    } else if (question.match(listSort)) {
    } else {
        return "Unable to answer your question";
    }
}

module.exports = parser