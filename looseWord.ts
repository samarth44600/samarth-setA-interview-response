const detectWord = (word: string) => {
    const newWord: string[] = word.split("");
    let looseWord: string = "";
    for (let i: number = 0; i < newWord.length; i++) {
        let lowerCaseChar: string = newWord[i].toLowerCase();
        if (newWord[i] === lowerCaseChar) {
            looseWord += newWord[i]
        }
    }

    return looseWord;
}

console.log(detectWord('UcUNFYGaFYFYGtNUH'))