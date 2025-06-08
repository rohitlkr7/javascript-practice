// this is a simple program to print even numbers from an array;

arr = [1,2,3,4,5,6,7,8,9,10];

for (let i=0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
        console.log(arr[i] +"IS EVEN");
    }
}