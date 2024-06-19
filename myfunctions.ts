function addTwo(num:number){
    return num+2
}

function addnumber(num:number):number{
    return num+2
}

const getHello = (s: string):string=>{
    return ""
}


function getUpper(val:string){
    return val.toUpperCase()
}

function signUpUser(name:string,email:string,password:string,isPaid:boolean){
    
}
let login = (name:string,email:string,ispaid:boolean=false)=>{

}

addTwo(5)
getUpper("hai")
signUpUser("Yogesh","ok@gmail.com","taiml",true)
login("n","n$n")


// function getValue(myVal:number):boolean{
//     if(myVal > 5){
//         return true
//     }
//     return "200 ok"
// }

const heros = ["thor","spiderman", "ironman"]
// const heros = [1,2,3]
heros.map((hero):string =>{return `hero is ${hero}`})


function consoleError(errmsg: string):void{
    console.log(errmsg);
}
function handleError(errmsg: string):never{
    throw new Error(errmsg);
}


export{}