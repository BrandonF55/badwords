


//--------------------------------------------------------------------
function badWords(text){
    let wordCount = 0;
    const userArray = text.split(' ');
    const wordbank = ['zoinks', 'muppeteer', 'biffaroni', 'loopdaloop'];
    userArray.forEach(function(userElement) {
        let isBad = false;
        wordbank.forEach(function(badwordElement) {
            if (userElement === badwordElement) {
                isBad = true;
            }
        });
        if (isBad) {
            userArray.splice(wordCount,  1);
            wordCount++;
        } else {
            wordCount++;
        }   
    });
    //return wordCount;
    return userArray.join(" ");
}
console.log(badWords("does this have bad word zoinks"));
console.log("end");
