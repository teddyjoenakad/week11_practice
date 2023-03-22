// const greet = (name , time = '2:00') => {
//     console.log(`Hello ${time} ${name}`)
// }

// function greet(parameter) {
//     console.log("Hello " + parameter)
// }

// greet('Teddy')


const area = (radius) => {
    if (isNaN(radius)) {
        alert('This is not a number')
    }
    else{
    const area = ((radius**2)*Math.PI).toFixed(2)
    return area
    }
};

let radius = prompt('Enter the radius of the cirle you want to calculate the area:');

alert(`The area of a cirlce with radius ${radius} is ${area(radius)}`);
