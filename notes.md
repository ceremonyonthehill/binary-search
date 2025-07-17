## binary search template

🔍 i'm struggling to understand what each code means, a classic problem.
yet i managed to understand it

## 📘 for the binary search iteration model:

```js
 function binarySearch(arr, x){
    let low = 0;
    // assign this for tracking the buttom part

    let high = arr.length - 1;
    // high for the top part

    let mid;
    // mid for the middle of two section

    while(high >= low){
        // while high values same or more than low determine mid with -

        mid = low + Math.floor((high - low) / 2)
        // low value + high - low divided by 2 and the result rounded to the floor. for example 5.6 = 5

        if(arr[mid] === x)
            return mid
            // if mid is equal to the target (x), return mid

        if(arr[mid] > x)
            high = mid -1
           // if mid is bigger than x, searchs for the left part
            
        else
        low = mid + 1
        // if mid is lower than x, searchs for the right part
    }
    return -1
    // return -1 if array length is 0
}
```

## 🔧 testcase

``` js
arr = new Array (2,3,4,10,40)
// assign an array

x = 10
// assign a target

result = binarySearch(arr, x)
// make a result variable that contains a function we made before

if(result == -1)
    console.log("item not found")
    // if there is no item, console.log "item not found"
else{
    console.log("the item was found at index" + " "+ result)
    // if item was found, console.log "item was found at index + " "+ result
}
```

## 📘 binary search recrusive model

 for the recrusive part it's the same, but the different is we need 
 assign high and low as a parameter.

 ## 📘 leetcode problem number 35

 im struggling figuring out how to make function return the before target number, for example if target 3. the answer will be 2
 i'm thingking of making a loop that iterate each array than if statement that identify if there is no target number in array, current target - 1

 but i miss understanding in here, we should giving an ouput of index not the value
 we looking for if array = 1,2,3,5 and the target is 4
 we will identify the index it should be
 in this case is 5 where 4 should be (index 3), because 1,2,3,4,5

 this makes me relize i still have no idea how bad i'am and need more improvement
 also how shock i'm the answer is changing the return - 1, to the return low. thus more showing how i have no idea what im doing xd
 why low contain the should-be index
 array = 1,3,5,6
 target = 2
 low = 0, high = 3, and mid = 1
 checked are mid in index 1 wich have value 3 bigger than 2?
 yes
 code execute high - 1, or in other words move to the left
 the code should be works like this
 3 > 2 /true
 high = mid - 1
 mid value = 1
 so 1-1
 high = 0

 than we move on to the low section
 low = 0
 high = 0
 mid = 0 or the value is 1
 than checks do mid is bigger than target?
 the answer is no
 than mid + 1, or in other words moves to the right
 the value of mid becomes 1
 so we have two new information right now
 high updated as 0, and low updated as 1
 then if we checked to the array index 1 is where the target should be, because 1,2,3
 tha's how low is saving where the index is.
 

 