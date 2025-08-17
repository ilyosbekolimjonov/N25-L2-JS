var sortPeople = function(names, heights){
    const people = names.map((name, i) => [name, heights[i]])
    
    people.sort((a, b) => b[1] - a[1])
    
    return people.map(person => person[0])
}

alert(`Natija: ${sortPeople(["Mary","John","Emma"], [180, 165, 170])}`)