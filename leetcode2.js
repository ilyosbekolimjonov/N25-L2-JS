var mostCommonWord = function(paragraph, banned){
    const bannedSet = new Set(banned)

    const words = paragraph
        .toLowerCase()
        .replace(/[!?',.\"]/g, " ")
        .split(/\s+/)
        .filter(Boolean)

    const freq = new Map()
    let maxWord = ""
    let maxCount = 0

    for (let word of words){
        if (!bannedSet.has(word)){
            freq.set(word, (freq.get(word) || 0) + 1)
            if (freq.get(word) > maxCount){
                maxCount = freq.get(word)
                maxWord = word
            }
        }
    }

    return maxWord
}

alert(`Natija: ${mostCommonWord("Bob hit a ball, the hit BALL flew far after it was hit.", ["hit"])}`)