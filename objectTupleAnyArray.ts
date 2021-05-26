
enum Role  { ADMIN , HOST , AUTHOR}

const introduction : {
               name: string,
               age:number,
               hobby:string,
               like:string,
               favoriteCountry:string,
               favoriteCity:string[],
               contactInfo:[number , string],// this is typescript infernece mechenism understand
               
} = { 
               name : 'Vaibhav Verma',
               age : 19,
               hobby : 'Exploring the World',
               like: 'anime',
               favoriteCountry : 'Japan',
               favoriteCity:['Tokyo' , 'Osaka'],
               contactInfo:[8223914227 , 'vaibhavvermaonline@gmail.com'], // tuple datatype which are differentiates index datatype value,
               
} 


const partnerIntroduction = { 
               name : 'Vaibhav Verma',
               age : 19,
               hobby : 'Exploring the World',
               like: 'anime',
               favoriteCountry : 'Japan',
               favoriteCity:['Tokyo' , 'Osaka'],
               contactInfo:[8223914227 , 'vaibhavvermaonline@gmail.com'], // tuple datatype which are differentiates index datatype value,
               role:Role.ADMIN
} 


if (Role.ADMIN === partnerIntroduction.role){
               console.log(`is an admin`);
}

console.log(introduction.age , introduction.favoriteCountry , ...introduction.favoriteCity)
console.log(`Contact him ${[...introduction.contactInfo]}`);
;
