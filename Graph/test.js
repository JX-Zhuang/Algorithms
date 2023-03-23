const test1 = () => {
    console.log('test1');
};

const test = (n, i) => {
    if (i === n) return;
    console.log('start', i);
    test(n, i + 1);
    console.log('end', i);
};
test(2, 0);
