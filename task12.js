function removeSpaces(str){
    return str.replace(/ /g, '')
}

alert(`Natija: ${removeSpaces("Hello World! How are you?")} \nNatija: ${removeSpaces("  Bu    qator    bo'shliqlarni o'chiradi  ")}`)