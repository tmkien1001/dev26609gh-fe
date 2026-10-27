arr=[22,43,54,65,34,86,87,12,65,45]
console.log(arr)
let total=0
for(let i=0;i< arr.length;i++){
    total+=arr[i];
}

console.log("tong cua arr:",total)
let evencount = 0;
let oddcount = 0;
for( let number of arr){
if(number% 2 ===0){
    evencount++;
} else{oddcount++}
}
console.log( "so chan:",{evencount});
console.log( "so le:",{oddcount});