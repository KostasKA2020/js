let cart = {
    'art1': {
        name: "Картридж для принтера HP",
        price: 1000
    },
    'art2': {
        name: "Картридж для принтера Samsung",
        price: 2000
    },
    'art3': {
        name: "Картридж для принтера Xerox",
        price: 3000
    },
};

document.onclick = event => {
    console.log(event.target.classList);
    if (event.target.classList.contains("add")) {
        addFunction(event.target.dataset.id);
        addSum(event.target.dataset.id);
    }
}

let addFunction = id => {
    cart[id];
    let section = document.querySelector(".cart");
    let element = document.createElement("div");
    element.innerHTML = cart[id].name + " - " + cart[id].price + "руб.";
    section.append(element);
    // let sum = cart[id].price;
    // sum += sum;
    // if (document.getElementById('sum-id') == null) {
    //     summa = document.createElement("div");
    //     summa.innerHTML = "Сумма покупок: " + sum;
    //     summa.id = "sum-id"
    //     section.append(summa);
    // } else summa.innerHTML = "Сумма покупок: " + sum;
}
let addSum = id => {
    cart[id];
    let section = document.querySelector(".cart");
    let sum = cart[id].price;
    sum += sum;
    summa = document.createElement("div");
    summa.innerHTML = "Сумма покупок: " + sum;
    summa.id = "sum-id"
    section.append(summa);
}


