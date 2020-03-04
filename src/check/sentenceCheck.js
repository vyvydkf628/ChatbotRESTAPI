module.exports = function(sentence) {

    // remove white space
    sentence = sentence.toLowerCase().trim()
    const res = {
        answer: "I don't get it",
        question: sentence
    }
    if(sentence==="what is your name?"){
        res.answer= "DongCheol"
    }
    if(sentence==="where are you located?"){
        res.answer= "Jeju"
    }
    if(sentence==="what is your favorite color?"){
        res.answer= "Black"
    }
    if(sentence==="what is your favorite company?"){
        res.answer= "Common Computer"
    }
    if(sentence==="what is  your github url?"){
        res.answer= "https://github.com/vyvydkf628"
    }
    return res
}