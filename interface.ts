interface User{
    readonly dbId:number
    email:string,
    userId:number,
    googleId?:string
    // startTrail:()=>string method1
    startTrail():string
    getCoupon(couponname:string,value:number):number
}

interface User {
    githubToken: string
}

const yogesh: User = {dbId:22,githubToken:"gitpass", email:"h@h.com",userId:221,startTrail:()=>{return "trail started"},getCoupon:(name:"yogesh",value:10)=>{return value}}

export{}