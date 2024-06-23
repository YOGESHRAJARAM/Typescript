abstract class Takephoto{
    constructor(public cameraMode: string,public filter: string){

    }
    abstract getSepia():void
    getReelTime():number{
        return 8
    }
    
}

// const yog =new Takephoto("test","tamil")

class Insta extends Takephoto{
    constructor( public cameraMode: string,public filter: string,public burst:number){
        super(cameraMode,filter)
    }

    getSepia(): void {
        console.log("hai")
    }
    
}

const yog =new Insta("test","tamil",5)

yog.getReelTime()
