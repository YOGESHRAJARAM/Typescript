type User ={
   readonly _id:string
    name:string
    email:string
    isActive:boolean
    creditcartDetail?: number
}

let myUser:User = {
    _id:"12345",
    name:"yogesh",
    email:"ravi@gmail",
    isActive:true
}

myUser.email = "ss@gmail"
// myUser._id =


type cardnumber ={
    cardnumber:number
}

type cardDate ={
    cardDate:string 
}

type creditcartDetails = cardnumber & cardDate & {
    cvv:number
}