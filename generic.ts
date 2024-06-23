const score :Array<number>=[]
const names:Array<string> =[]

function identityOne(val:boolean |number): boolean |number{
    return val
}
function identityTwo(val:any):any{
    return val
}

//generic
function identitythree<Type>(val:Type):Type{     
    return val
}

identitythree("Yogesh")

function identityFour<h>(val:h):h{
    return val
}

interface Bootle{
    brand:string,
}

identityFour<Bootle>({brand:"tamil"})

function getSearchProducts<T>(products:T[]):T{
    const myIndex =3
    return products[myIndex]
}

//arrow function 

const getMoreSearchProducts = <T,>(products:T[]): T =>{
    const myIndex = 4
    return products[myIndex]
}
