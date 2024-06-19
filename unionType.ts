let score:number | string = 33

score =44
score = "welcome"

type User = {
    name:string,
    id:number
}

type Admin = {
    username:string;
    id:number
}

let Yogesh : User | Admin = {name:"hitesh",id:224}

Yogesh = { username:"Yogesh",id:344 }

getDbId("3")
getDbId(5)

function getDbId(id:number | string){

    if(typeof id === "string"){
        id.toLowerCase()
    }
    if(typeof id === "number"){
        id+3
    }


    console.log(`DB id is: ${id}`)
}

//array

const date:number[]=[1,2,3]
const data2:string[]=["1","2","3"]

const data3:string[] | number[] =["1","3","5"]
const data4:(string | number)[] =["1",3,"5"]


// general type

let seatAllotment : "aisle"| "middle" | "window"
// seatAllotment ="crew"
seatAllotment ="aisle"

export{}