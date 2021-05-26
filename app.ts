const add=(...num : number[]):number[]=> {
           return num;    
}

let car : (...num)=>number[];

car = add;


const addNumber = add(3 ,5 , 4 , 5 ,5 ,6 , 6 ,7, 7, 4, 43 ,5, 5, 5, 4 ) ;

const showNumber = car(13 ,5 , 4 , 5 ,5 ,6 , 6 ,7, 7, 4, 43 ,5, 5, 5, 4 ) ;

console.log(`addNumber ${addNumber}`);
console.log(`showNumber ${showNumber}`);
