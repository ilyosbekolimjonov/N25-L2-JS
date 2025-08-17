function getFirstValue(arr){
    if(arr.length === 0)
        return "Array bo'sh!"

    return arr[0]
}

let result1 = getFirstValue([1, 2, 3])
let result2 = getFirstValue([-500, 0, 50])
let emptyArray = getFirstValue([])

alert(`Natija: ${result1} \nNatija: ${result2} \nNatija: ${emptyArray}`)