   /// ASSIGNMENT 1  \\\
    ////// BUILDING A FRIEND LIST  \\\\\\\


//Task 1
 let friend1={
    firstName:"Rahima",
    lastName :"Imran",
    id :1
 }; 

 let friend2={
    firstName:"Shafay",
    lastName :"Wassem",
    id :2
}; 
 
let friend3={
   firstName:"Rija",
   lastName :"Adnan",
   id :3
}; 

let people={
    friends:[friend1, friend2, friend3]
}
console.log(people);

   ////ASSIGNMENT  2\\\\
    ////MANUIPLATING AN ARRAY : REARRANGING  WORDS \\\\
      
const scrambledArray  = ["tudent", "of" ,true ,123 , "am" ,"a" , "GIAIC" , "I"];
   scrambledArray.splice (2,2)
   scrambledArray.pop()
   scrambledArray.unshift("I")
   scrambledArray[1] = "am"
   scrambledArray[2] = "a"
   scrambledArray[3] = "student"
   scrambledArray[4] = "of"
   scrambledArray[5] = "GIAIC"
   console.log (scrambledArray.join(''))


      ////ASSIGNMENT 3 \\\\
      /// COPY PRODUCT CATALOGY \\\\
let inventory : Product []=[];

type Product = {
    name :string,
    model :string,
    price :number,
    quantity : number,
}

let product1:Product={
    name : "mehran",
    model : "2015",
    price  : 200000,
    quantity : 1,
}


let product2:Product={
    name : "cultus",
    model : "2017",
    price  : 250000,
    quantity : 2,
}


let product3:Product={
    name : "civic",
    model : "2022",
    price  : 900000,
    quantity : 3,
}

inventory.push( product1, product2 ,product3) 
console.log (inventory);
console.log (inventory[2].quantity);
console.log (inventory[0].price);
console.log (inventory[1].name);

 //// ASSIGNMENT 4 \\\\
   ////  STUDENT LIST ORGANIZER \\\\\


   interface Student {
    name :string, 
    seniorStatus :boolean,  
    completeAssignments: boolean,
   }

   let students :Student[] =[
      {name: "Rahima", seniorStatus :true, completeAssignments :true },
      {name: "Hassan", seniorStatus :false, completeAssignments :false },
      {name: "Shafay", seniorStatus :false, completeAssignments :true },
      {name: "Ayish", seniorStatus :true, completeAssignments :false },
      {name: "Rija", seniorStatus :true, completeAssignments :false },
   ];
   console.log(students)
