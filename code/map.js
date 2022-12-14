const sqr = (x) => {
    return x*x
}

const factorial = (x) => {
    if (x<0) {
        console.error('For factorial argument should be positive');
    } 
    let fact = 1;
    for (let i = 2; i <= x; i++){
        fact *= i;
    }
    return fact;
}

function map(fn,js){
    const res = new Array();
    for (let i = 0; i < js.length; i++){
        res.push(fn(js[i]));
    }
    return res;
}

function show(data){
    document.getElementById("hw3").innerHTML += data + "<br/>"
}

const checkAge = (age) => {
    return age > 18 ? true : 'Батьки дозволили?'
}

show(`sqrs are ${map(sqr,[1,2,3,1,2,-1,5,4,3])}`)
show(`factorials are ${map(factorial,[1,2,3,1,2,-1,5,4,3])}`)
