function fiftyThirtyTwenty(number){
    if (typeof number !== 'number' || number < 0)
        return "Noto'g'ri qiymat kiritildi."

    const ilm = number * 0.5   
    const xarajat = number * 0.3 
    const kelajak = number * 0.2 

    const resultObject = {
        ilm: ilm,
        harajat: xarajat,
        kelajak: kelajak
    }
    return resultObject
}

alert(`Natija: ${JSON.stringify(fiftyThirtyTwenty(1000))}`)