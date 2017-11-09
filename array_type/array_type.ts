let arr = [10,20,30];
console.log(arr);

let arr1 = ["A","B","C"];
console.log(arr1);

let arr2 = [10,"20",30];
console.log(arr2);

let arr3 = [10,30];
// arr3.push("20"); //Argument of type '"20"' is not assignable to parameter of type 'number'

let arr4: number[] = [10,20];
console.log(arr4);

// let arr5: number[] = [10,20,"30"]; //Type '(string | number)[]' is not assignable to type 'number[]'
// console.log(arr5);

let arr6: (number | string)[] = ["1",2,3];
console.log(arr6);

// let arr7: (number | string)[] = ["1",2,3,true]; //Type '(string | number | boolean)[]' is not assignable to type '(string | number)[]'

let arr8: (number | string | boolean)[] = ["1",2,true];
console.log(arr8);

let arr9: any[] = ["1",2,3];
console.log(arr9);

let arr10: any[] = [1,2];
arr10.push("3");
console.log(arr10);
