"use strict";
console.log("hai");
class User {
    constructor(email, name) {
        this.coursemember = 5;
        this.courceCount = 1;
        this.city = "chennai";
        this.email = email;
        this.name = name;
    }
    get getAppleEmail() {
        return `apple${this.email}`;
    }
    get courcecount() {
        return this.courceCount;
    }
    deleteToken() {
        console.log("Token deleted");
    }
    set CourseCount(couseNum){
        if (couseNum <= 1) {
            throw new Error("Course count should be more than 1");
        }
        this.CourseCount = couseNum;
    }
}
class Subclass extends User {
    constructor() {
        super(...arguments);
        this.ifFamily = true;
    }
    changeCoursemember() {
        this.coursemember = 10;
    }
}
const yogesh = new User("h@h.com", "yogesh");
console.log(yogesh.getAppleEmail);
