const count = document.getElementById('count');
let counter = 0;

function Btn() {
    counter = counter + 1;
    count.innerHTML = counter
};

function decreaseBtn() {
    counter = counter - 1;
    count.innerHTML = counter
};
function reset() {
    counter = 0;
    count.innerHTML = counter
};

function doubleX2() {
    counter = counter *2;
    count.innerHTML = counter
};

function X5() {
    counter = counter *5;
    count.innerHTML = counter
};

function X10() {
    counter = counter *10;
    count.innerHTML =counter
};

function X15() {
    counter = counter *15;
    count.innerHTML = counter
};

function X25() {
    counter = counter *25;
    count.innerHTML = counter
};

function X3() {
    counter = counter *3;
    count.innerHTML = counter
};

function X7() {
    counter = counter *7;
    count.innerHTML = counter
};

function X9() {
    counter = counter *9;
    count.innerHTML = counter
};

function X12() {
    counter = counter *12;
    count.innerHTML = counter
};

function X50() {
    counter = counter *50;
    count.innerHTML = counter
};

function feel() {
    counter = counter +4;
    count.innerHTML = counter
};

function set() {
    counter = counter /5;
    count.innerHTML = counter
};

function fit() {
    counter = counter /15;
    count.innerHTML = counter
};

function feed() {
    counter = counter /35;
    count.innerHTML = counter
};

function cube() {
    counter = counter **3;
    count.innerHTML = counter
}

function square() {
    counter = counter **2;
    count.innerHTML = counter
}

function squareRoot() {
    counter = counter /2;
    count.innerHTML = counter
}

function sin() {
    counter = Math.sin(counter)
    count.innerHTML = counter
};

function tan() {
    counter = Math.tan(counter);
    count.innerHTML = counter
};

function cos() {
    counter = Math.cos(counter);
    count.innerHTML = counter
};
