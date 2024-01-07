const matchHouses = (step: number) => {
    if (step < 0) {
        console.log('Number must be positive integer')
        return;
    }
    if (step === 0) {
        console.log("house = ", 0);
        return;
    }

    const separateHouse: number = step * 6;
    const joinedHouse: number = separateHouse - (step - 1);
    console.log(joinedHouse)
    return;

}

console.log(matchHouses(87))