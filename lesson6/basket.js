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
//Добавляем товары
let addFunction = id => {
    cart[id];
    let section = document.querySelector(".cart");
    let element = document.createElement("div");
    let summa = document.getElementById('sum-id');
    element.innerHTML = cart[id].name + " - " + cart[id].price + "руб.";
    section.insertBefore(element, summa);//вставляем товар перед Суммой
}

//Добавляем, изменяем и вычисляем Сумму
let addSum = id => {
    sum += cart[id].price;
    let section = document.querySelector(".cart");
    let content = document.getElementById('sum-id');
    console.log (content);
    if (content == null) {
        let summa = document.createElement("div");
        summa.id = "sum-id"
        summa.innerHTML = "Сумма покупок: " + sum + "руб.";
        section.append(summa);
    } else content.innerHTML = "Сумма покупок: " + sum + "руб.";
}


