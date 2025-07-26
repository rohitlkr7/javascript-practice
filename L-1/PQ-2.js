// even sum problem solve 

arr = [1,2,3,4,5,6,7,8,9,10];

let evenSum = 0;
for (let i=0; i<arr.length; i++) {
    if (arr[i] %2 ===0){
        evenSum += arr[i];
        
    }

}
console.log("the sum of even number is " + evenSum) 

// odd sum problem solve

oddSum = 0;
for (let i=0; i<arr.length; i++) {
    if (arr[i] %2 != 0) {
        oddSum += arr[i];
    };
   
};
console.log("the sum of even number is " + oddSum) 

// sum of array problem solve

let sum = 0;
for (let i=0; i<arr.length; i++) {
    sum += arr[i];

}
console.log("the sum of array is  " + sum)