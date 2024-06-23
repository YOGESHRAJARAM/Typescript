"use strict";
console.log("hai");

class User {
    protected coursemember =5
    private courceCount = 1
    public email:string
    name :string
    private city :string ="chennai"
    constructor(email:string,name:string){
        this.email = email;
        this.name= name
    }
    get getAppleEmail():string{
        return `apple${this.email}`
    }
    get courcecount():number{
        return this.courceCount
    }
    private deleteToken(){
        console.log("Token deleted")
    }

    set CourseCount(couseNum:number){
        if(couseNum <=1){
              throw new Error("Course count should be more than 1")
        }
        this.CourseCount = couseNum

    }

}

class Subclass extends User{
   ifFamily :boolean = true

   changeCoursemember(){
       this.coursemember = 10
   }
}



const yogesh = new User("h@h.com","yogesh")
console.log(yogesh.getAppleEmail)

// yogesh.city = "randomcity"