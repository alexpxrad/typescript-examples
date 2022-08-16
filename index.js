var firstName = 'alex';
var age = 49;
var active = true;
//let names: string[] = ["1,2.3,4"]  //gives us an error
var names = ["bobby", "jennifer", "lily"];
var studentTypes;
(function (studentTypes) {
    studentTypes[studentTypes["pending"] = 0] = "pending";
    studentTypes[studentTypes["active"] = 1] = "active";
    studentTypes[studentTypes["almostDone"] = 2] = "almostDone";
    studentTypes[studentTypes["graduated"] = 3] = "graduated";
    studentTypes[studentTypes["TAs"] = 4] = "TAs";
    studentTypes[studentTypes["teachers"] = 5] = "teachers"; //5
})(studentTypes || (studentTypes = {}));
var mystatus = studentTypes.graduated;
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
function sum(arr) {
    return arr.reduce(function (total, num) { return total + num; });
    // return arr.reduce ((previousValue: number, currentValue: number)=> { return previousValue + currentValue}) //JS version of line above
}
var numbers = [1, 2, 3, 4, 5, 6];
// console.log(sum(numbers))
var complexItem = { name: "damian" };
//complexItem.name = "todd"
//complexItem = { name: "damian", hasDog: true}
complexItem = { title: "professor" };
complexItem = "it's a string";
complexItem = 22;
// console.log("complexItem", complexItem)
var bloodType;
(function (bloodType) {
    bloodType[bloodType["aPositive"] = 0] = "aPositive";
    bloodType[bloodType["bPositive"] = 1] = "bPositive";
    bloodType[bloodType["oNegative"] = 2] = "oNegative";
    bloodType[bloodType["oPostive"] = 3] = "oPostive";
})(bloodType || (bloodType = {}));
var me = {
    name: "bobby",
    age: 49,
    //bloodType: bloodType.aPositive,  the question mark makes the property optional and not required
    height: 6 * 12
};
console.log({ me: me });
