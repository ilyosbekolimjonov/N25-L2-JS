function evenOddIndexSums(arr){
    let evenIndexSum = 0
    let oddIndexSum = 0

    for (let i = 0; i < arr.length; i++){
        if (i % 2)
            oddIndexSum += arr[i]
        else
            evenIndexSum += arr[i]
    }

    return{
        evenIndexSum: evenIndexSum,
        oddIndexSum: oddIndexSum
    }
}

alert(`Natija: ${JSON.stringify(evenOddIndexSums([1, 2, 3, 4, 5, 6]))}`)