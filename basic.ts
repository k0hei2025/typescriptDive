'strict mode'
console.log(`welcome to Typescript!`)

const num=5; 
const num2=2.5;
const printResult = true
const text = 'Print the Sum = '


const add=(num : number, num2 : number , printResult:boolean , text : string )=>{
               if (printResult){
                              console.log(  ` ${text} ${num+num2}`)
               }
               return num+num2
}

console.log(` adding values of ${num} +  ${num2} =  ${add(num , num2 , printResult , text)}`);