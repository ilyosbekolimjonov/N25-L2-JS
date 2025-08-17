var findRestaurant = function(list1, list2){
    const map = new Map()
    const result = []
    let minSum = Infinity

    list1.forEach((word, i) =>{
        map.set(word, i)
    })

    list2.forEach((word, j) =>{
        if (map.has(word)){
            const sum = j + map.get(word)
            if (sum < minSum){
                minSum = sum
                result.length = 0 
                result.push(word)
            }
            else if (sum === minSum)
                result.push(word)
        }
    })
    return result
}

alert(`Natija: ${findRestaurant(["Shogun","Tapioca Express","Burger King","KFC"], ["KFC","Shogun","Burger King"])}`)