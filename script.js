//1
// const sum = (a, b) => a + b;

// const mult = (a, b) => a * b; 

// const hof = (func, a, b) => {
//  return func(a,b)
//  }
 //console.log(hof(sum, 10, 20))
 //console.log(hof(mult, 10, 20, 100, 50))
//     const sum = (...args) =>{
//     let result = 0;
//     // console.log(args);
//     for(let element of args){
//        result += element   
//     }
     
// };
// console.log(sum(1,2,3,4,5));
// const mult = (...args) =>{
//     let result = 1;
//     for(let element of args){
//        result = result * element   
//     }
//     return result;
// }; 

// const divid = (a, b) => a / b;

// const minus = (a, b) => a - b;

// const multyFunc = (func, ...rest) => {
    
//  return func(...rest)
// };
// console.log(multyFunc(mult, 10, 20))
// console.log(multyFunc(mult, 10, 20, 100, 50))


const listOfDepartment = [
    {
    id: 1,
    departmentName: "FrontEnd",
    amountOfEmployee: 4,
    employeeSalary: [
    { id: 101, employeeName: "Iann " , salary: 100},
    { id: 102, employeeName: "Yeva ", salary: 120 },
    { id: 103, employeeName: "Adam " , salary: 30},
    { id: 104, employeeName: "Smith ", salary: 70}
    ]
    },
    {
    
    id: 1,
    departmentName: "BackEnd",
    amountOfEmployee: 3,
    employeeSalary: [
    { id: 201, employeeName: "Lev " , salary: 80},
    { id: 202, employeeName: "Gleb ", salary: 140 },
    { id: 203, employeeName: "Helen " , salary: 25},
    ]
    },
    {
        
    id: 1,
    departmentName: "FullStack",
    amountOfEmployee: 5,
    employeeSalary: [
    { id: 301, employeeName: "Yana " , salary: 150},
    { id: 302, employeeName: "Sam ", salary: 60 },
    { id: 303, employeeName: "Viktor ", salary: 30 },
    { id: 304, employeeName: "Andri ", salary: 20 },
    { id: 305, employeeName: "Olha " , salary: 180},
    ]
    }
    ]
    const ttlSalaryDepartment = (employeeList) => {
        let total = 0;
        for(let elements of employeeList){
           total += elements.salary 
        }
        return total
    }
    const averageSallaryDepartment = (employeeList) => Math.roundttlSalaryDepartment(employeeList) / employeeList.length;


    const workWithSalary = (arr, callback) => {
        for(let elements of arr){
            console.log(callback(elements.employeeSalary));
        }
    };
    workWithSalary(listOfDepartment, averageSallaryDepartment)
    // workWithSalary(listOfDepartment, ttlSalaryDepartment)