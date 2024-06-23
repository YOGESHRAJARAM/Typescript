interface TakenPhoto{
    cameraMode:string
    filter:string
    burst:number
}

interface story{
    createStory(number:number):string
}

class Instagram implements TakenPhoto {
    constructor(
       public cameraMode:string,
       public filter:string,
       public burst:number
    ){

    }
}

class Youtube implements TakenPhoto,story{
    constructor(
        public cameraMode:string,
        public filter:string,
        public burst:number,
        public short :string
     ){
 
     }

     createStory(num:number): string {
        console.log(num+2)

         return "hai"
     }
 
}

const user =new Youtube("tamil","tamil",5,"tamil")

user.createStory(6)

export {}