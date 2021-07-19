const gotCitiesCSV = "King's Landing,Braavos,Volantis,Old Valyria,Free Cities,Qarth,Meereen";

const lotrCitiesArray = ["Mordor","Gondor","Rohan","Beleriand","Mirkwood","Dead Marshes","Rhun","Harad"];

const bestThing = "The best thing about a boolean is even if you are wrong you are only off by a bit";

const createDivMandatory = (kata) => {
    const div = document.createElement('div')
    const sectionKatas = document.querySelector('.katas__mandatory')
    sectionKatas.appendChild(div)
    div.innerHTML = kata
}

const createDivBonus = (kata) => {
    const div = document.createElement('div')
    const sectionKatas = document.querySelector('.katas__bonus')
    sectionKatas.appendChild(div)
    div.innerHTML = kata
}

const kata1 = () => {
    return gotCitiesCSV.split(',')
}

const kata2 = () => {
    return bestThing.split(' ')
}

const kata3 = () => {
    return gotCitiesCSV.split(',').join(';')
}

const kata4 = () => {
    return lotrCitiesArray.toString()
}

const kata5 = () => {
    return lotrCitiesArray.slice(0, 5)
}

const kata6 = () => {
    return lotrCitiesArray.slice(3)
}

const kata7 = () => {
    return lotrCitiesArray.slice(2, 5)
}

const kata8 = () => {
    lotrCitiesArray.splice(2, 1)
    return lotrCitiesArray
}

const kata9 = () => {
    lotrCitiesArray.splice(5)
    return lotrCitiesArray
}

const kata10 = () => {
    lotrCitiesArray.splice(2, 0, 'Rohan')
    return lotrCitiesArray
}

const kata11 = () => {
    lotrCitiesArray.splice(5, 1, 'Deadest Marshes')
    return lotrCitiesArray
}

const kata12 = () => {
    return bestThing.slice(0, 14)
}

const kata13 = () => {
    return bestThing.slice(-12)
}

const kata14 = () => {
    return bestThing.slice(23, 38)
}

const kata15 = () => {
    return bestThing.substring(bestThing.length - 12)
}

const kata16 = () => {
    return bestThing.substring(23, 38)
}

const kata17 = () => {
    lotrCitiesArray.pop()
    return lotrCitiesArray
}

const kata18 = () => {
    lotrCitiesArray.push('Deadest Marshes')
    return lotrCitiesArray
}

const kata19 = () => {
    lotrCitiesArray.shift()
    return lotrCitiesArray
}

const kata20 = () => {
    lotrCitiesArray.unshift('Mordor')
    return lotrCitiesArray
}

const bonus1 = () => {
    return bestThing.indexOf('only')
}

const bonus2 = () => {
    return bestThing.indexOf('bit')
}

const bonus3 = () => {
    let gotCitiesDoubleVowel = []
    for (let i = 0; i < kata1().length; i++){
        if (kata1()[i].includes('aa') || kata1()[i].includes('ee') || kata1()[i].includes('ii') || kata1()[i].includes('oo') || kata1()[i].includes('uu')){
            gotCitiesDoubleVowel.push(kata1()[i])
        }
    }
    return gotCitiesDoubleVowel
}

const bonus4 = () => {
    let lotrCitiesOr = []
    for (let i = 0; i < lotrCitiesArray.length; i++){
        if (lotrCitiesArray[i].includes('or')){
            lotrCitiesOr.push(lotrCitiesArray[i])
        }
    }
    return lotrCitiesOr
}

const bonus5 = () => {
    let bestThingArr = bestThing.split(' ')
    let bestThingB = []
    for (let i = 0; i < bestThingArr.length; i++){
        if (bestThingArr[i][0] === 'b'){
            bestThingB.push(bestThingArr[i])
        }
    }
    return bestThingB
}

const bonus6 = () => {
    return lotrCitiesArray.includes('Mirkwood') ? 'Sim' : 'Não'
}

const bonus7 = () => {
    return lotrCitiesArray.includes('Hollywood') ? 'Sim' : 'Não'
}

const bonus8 = () => {
    return lotrCitiesArray.indexOf('Mirkwood')
}

const bonus9 = () => {
    let lotrCitiesDoubleWord = []
    for (let i = 0; i < lotrCitiesArray.length; i++){
        if (lotrCitiesArray[i].includes(' ')){
            lotrCitiesDoubleWord.push(lotrCitiesArray[i])
        }
    }
    return lotrCitiesDoubleWord
}

const bonus10 = () => {
    return lotrCitiesArray.reverse()
}

const bonus11 = () => {
    return lotrCitiesArray.sort()
}

const bonus12 = () => {
    return lotrCitiesArray.sort(function (a, b) {
        return a.length - b.length
    })
}

let callKatas = [kata1, kata2, kata3, kata4, kata5, kata6, kata7, kata8, kata9, kata10, kata11, kata12, kata13, kata14, kata15, kata16, kata17, kata18, kata19, kata20]


for (let i = 0; i < callKatas.length; i++){
    createDivMandatory(`Kata ${i + 1}: ${callKatas[i]()}`)
}

let callBonus = [bonus1, bonus2, bonus3, bonus4, bonus5, bonus6, bonus7, bonus8, bonus9, bonus10, bonus11, bonus12]

for (let i = 0; i < callBonus.length; i++){
    createDivBonus(`Bônus ${i + 1}: ${callBonus[i]()}`)
}


