let i = 2; //0 и единица не являются простыми числами
while (i <= 100) {
    let n = 2;
    while (n <= i) {
        if (i % n === 0 && i !== 2) break;
        if (i - 1 <= n) console.log (i);
        n++;
    }
    i++;
}
