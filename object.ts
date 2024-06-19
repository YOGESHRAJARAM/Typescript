const User ={
    name:"hitest",
    email:"hitesh@lco.dev",
    isActive:true
}

function createUser({name:string,isPaid:boolean}){

}

function createUserCours():{name:string,price:number}{
  return {name:"react",price:399}
}

let users = {name:"yogesh",isPaid:true,email:"@gmail"}
createUser({name:"yogesh",isPaid:true})
createUser(users)

export {}