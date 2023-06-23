function BinarySearch(value1, array1) {
    array1.sort();
    const middleInd = array1.length / 2;
    const value = Number(value1);
    const middleNumPos = Math.floor(Number(middleInd));
    const middleNum = array1[middleNumPos];

    if (value1 < array1[0] || value1 > array1[-1]) {
        console.log("Value does not included in this array");
        return;
    }

    if (middleNum === value) {
        console.log(
            "Searched value is: ",
            Number(middleNum),
            " and it is located at: ",
            middleNumPos,
            "position of given array"
        );
        return;
    } else if (middleNum > value) {
        const newArray = array1.slice(0, Number(middleNum));
        BinarySearch(value, newArray);
    } else {
        const newArray = array1.slice(middleNum + 1, array1.length);
        BinarySearch(value, newArray);
    }
}
