type stringMath = string | number ;
type fixedString = 'as number' | 'as String';


const add=(num : stringMath, num2 : stringMath , literalTest : fixedString )=>{
               typeof num === 'number' && typeof num2 === 'number' && literalTest === 'as number' ?
                console.log(num + num2) :
                 console.log(num.toString() + num2.toLocaleString());
}

const addNumber = add(45 ,675,'as String');

const addString = add('k0hei','2023','as number');