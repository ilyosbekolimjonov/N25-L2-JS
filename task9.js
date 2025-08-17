function check(arr, num){
    if(arr.length === 0)
        return "Array bo'sh!"

    // 1-usul
    return arr.includes(num)

    // 2-usul
    // return arr.indexOf(num) !== -1;
}

alert(`Natija: ${check([1, 2, 3, 4, 5], 3)}`)