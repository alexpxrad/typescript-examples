let firstName:string = 'alex'
let age: number = 49
let active: boolean = true

//let names: string[] = ["1,2.3,4"]  //gives us an error
let names: string[] = ["bobby", "jennifer", "lily"] 


enum studentTypes {
    pending, //0
    active,//1
    almostDone, //2
    graduated, //3
    TAs, //4
    teachers //5
}

let mystatus =studentTypes.graduated



// switch (Number(mystatus)) {
//     case Number(studentTypes.active): 
//                 console.log("student is active")
//         break;
//     case Number(studentTypes.graduated):
//             console.log("Student is graduated")
//         break;
//     default:
//             console.log("🤔")
// }



// console.log(studentTypes)
// console.log("mystatus is", mystatus)
// if  (mystatus == studentTypes.graduated) {
// console.log(`the student is graduated`)
// }

// console.log(names)
// console.log(`my firstname is ${firstName}`)


// let code: string | number  = 11

// code = "aa11"
// // code = false //error. not a string or number

// console.log(`my entry code is: ${code}`)


function sum (arr: number[]) : number {
    return arr.reduce((total: number, num: number) => total + num )
    // return arr.reduce ((previousValue: number, currentValue: number)=> { return previousValue + currentValue}) //JS version of line above
 }



        
let numbers: number[] = [1,2,3,4,5,6]

// console.log(sum(numbers))

let complexItem: any = { name : "damian"}

//complexItem.name = "todd"
//complexItem = { name: "damian", hasDog: true}

complexItem = { title: "professor"}
complexItem = "it's a string"
complexItem = 22

// console.log("complexItem", complexItem)

enum bloodType {
    aPositive,
    bPositive,
    oNegative,
    oPostive,
}

interface human {
    name: string,
    age: number,
    height: number,
    bloodType?: bloodType
}


const me : human = { 
    name: "bobby",
    age: 49,
    //bloodType: bloodType.aPositive,  the question mark makes the property optional and not required
    height: 6 * 12
  
}

console.log({me})
