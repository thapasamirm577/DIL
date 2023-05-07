function getFactor(a, b) {
    var factors = [];
    var smallest = b[0];
    var isFactor = true;
    var count = 0;
    for (var i = 0; i < b.length; i++) {
        if (b[i] < smallest) {
            smallest = b[i];
        }
    }
    for (var j = 1; j <= smallest; j++) {
        isFactor = true;
        for (var k = 0; k < b.length; k++) {
            if (b[k] % j != 0) {
                isFactor = false;
                break;
            }
        }
        if (isFactor) {
            factors.push(j);
        }
    }
    for (var x = 0; x < factors.length; x++) {
        isFactor = true;
        for (var y = 0; y < a.length; y++) {
            if (factors[x] % a[y] != 0) {
                isFactor = false;
                break;
            }
        }
        if (isFactor) {
            count++;
        }
    }
    return count;
}

console.log(getFactor([2, 4], [16, 32, 96]));
