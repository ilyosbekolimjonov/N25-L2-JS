function arrayValuesTypes(arr){
    if(arr.length === 0)
        return "Array bo'sh!"

    return arr.map(item => typeof item)
}

alert(`Natija: ${arrayValuesTypes([1, 2, "salom", true])}`)