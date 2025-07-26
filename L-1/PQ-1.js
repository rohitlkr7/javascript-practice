// this is a simple program to print even numbers from an array;

arr = [1,2,3,4,5,6,7,8,9,10];

for (let i=0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
        console.log(arr[i] +  "is even");
    }
}  


//  Odd number problem solve 

for(let i=0; i<arr.length; i++) {
    if (arr[i] %2 !=0){
        console.log(arr[i]  + " is odd")
    }
}