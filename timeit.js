export const timeit = (fn, count=1000) => {
    const seq = [];
    for(let n=0; n < count; n++) {
        const start = performance.now();
        fn();
        const end = performance.now();
        seq.push(end - start);
    }
    let a = avg(seq).toPrecision(5);
    let d = stdev(seq).toPrecision(5);

    return `${count} loops, avg. ${a}ms [+/- ${d}]`;
}

export const avg = seq => {
    let sum = 0;
    let n = 0;
    for(let x of seq) {
        sum += x;
        n++;
    }
    return sum/n;
}

export const stdev = seq => {
    const a = Array.from(seq);
    let mu = avg(a);

    let d2 = 0;
    for(let xi of seq) {
        d2 += (xi - mu)**2;
    }
    return Math.sqrt((1/a.length) * d2);
}