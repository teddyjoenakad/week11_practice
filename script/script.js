// const greet = (name , time = '2:00') => {
//     console.log(`Hello ${time} ${name}`)
// }

// function greet(parameter) {
//     console.log("Hello " + parameter)
// }

// greet('Teddy')




// const radiusPara = document.querySelector('#radius');
// console.log(radiusPara);
// const areaPara = document.querySelector('#area');
// console.log(areaPara);

// const area = (radius) => {
//     if (isNaN(radius)) {
//         areaPara.textContent = 'This is not a number';
//         return;
//     }
//     else{
//     const area = ((radius**2)*Math.PI).toFixed(2);
//     return area;
//     }
// };

// let radius = prompt('Enter the radius of the cirle you want to calculate the area:');

// radiusPara.textContent += radius;

// if (area(radius) !== undefined) {
    
// }
// else{
//     areaPara.textContent = `The area of a cirlce with radius ${radius} is ${area(radius)}`;
// }



const populatelist = (shoppinglist) => {
    const ulList = document.querySelector('.shopping');

    for (let item of shoppinglist){
        const newLi = document.createElement('li');
        ulList.appendChild(newLi);
        newLi.textContent = item;
    }
}

let mylist = ['bread', 'cheese', 'green pepper']

populatelist(mylist)