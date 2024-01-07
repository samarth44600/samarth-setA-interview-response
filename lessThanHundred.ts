const lessThan100 = (a: number, b: number): boolean => {
    if (a + b < 100) {
        return true;
    }
    return false;
}


console.log(lessThan100(23, 78));