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

var sum = 0;
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
}
let addSum = id => {
    sum += cart[id].price;
    let section = document.querySelector(".cart");
    let content = document.getElementById("sum-id");
    if (content == null) {
        let summa = document.createElement("div");
        summa.id = "sum-id;"
        summa.innerHTML = "Сумма покупок: " + sum;
        section.append(summa);
    } else summa.innerHTML = "Сумма покупок: " + sum;
}


