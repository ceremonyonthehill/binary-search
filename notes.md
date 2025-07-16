## binary search template

🔍 i'm struggling to understand what each code means, a classic problem.
yet i managed to understand it

## 🔍 for the binary search iteration model:

function binarySearch(arr, x){
    let low = 0;
    - assign this for tracking the buttom part

    let high = arr.length - 1;
    - high for the top part

    let mid;
    - mid for the middle of two section

    while(high >= low){
        - while high values same or more than low determine mid with -

        mid = low + Math.floor((high - low) / 2)
        - low value + high - low divided by 2 and the result rounded to the floor. for example 5.6 = 5

        if(arr[mid] === x)
            return mid
            - if mid is equal to the target (x), return mid

        if(arr[mid] > x)
            high = mid -1
           - if mid is bigger than x, searchs for the left part
            
        else
        low = mid + 1
        - if mid is lower than x, searchs for the right part
    }
    return -1
    - return -1 if array length is 0
}

## 🔧 testcase

arr = new Array (2,3,4,10,40)
- assign an array

x = 10
- assign a target

result = binarySearch(arr, x)
- make a result variable that contains a function we made before

if(result == -1)
    console.log("item not found")
    - if there is no item, console.log "item not found"
else{
    console.log("the item was found at index" + " "+ result)
    - if item was found, console.log "item was found at index + " "+ result
}

## binary search recrusive model

🔍 for the recrusive part it's the same, but the different is we need to assign high and low as a parameter.