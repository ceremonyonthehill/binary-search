/*
var result = function(nums, target){
    let high = nums.length - 1;
    let low = 0;
    let mid;
    while(high >= low){
        mid = low + Math.floor((high - low) /2)
        if(nums[mid] == target)
            return mid
        if(nums[mid] > target)
            high = mid -1
        else{
            high = mid + 1
        }
    }
    return -1, -1;
}
    */

var result = function search(x, y){
    let start = -1
    let end = -1
    for (let i = 0; i < x.length; i++){
        if(x[i] === y){
            start = i
            end = i
        } for (let j = i + 1; j < x.length; j++){
            if(j[i] === y){
                start = j
                end = i
            }
        }

    }
    return start,end
}

x = [1,2,2,3]
y = 2
console.log(result)
