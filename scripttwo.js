function generateRandomNumber(num) {
    return Math.floor(Math.random() * num)
}

const collectiveWinsdom = {
    signInfo: ['star', 'moon', 'sun', 'comet'],
    fortuneOutput: ['terrible luck', 'bad luck', 'ok luck', 'good luck', 'great luck'],
    advice: ['go out and eat', 'not read this', 'play more', 'trust no one']
}

let personnalWisdom = [];

for(let prop in collectiveWinsdom){
    let optionIdx = generateRandomNumber(collectiveWinsdom[prop].lenght)


    switch(prop) {
        case 'signInfo' : 
            personnalWisdom.push('Your sign is ${collectiveWisdom[prop][optionIdx]}.')
            break
        case 'fortuneOutput':
            personnalWisdom.push('You are having ${collectiveWisdom[prop][optionIdx]}.')
            break
        case 'advice':
            personnalWisdom.push('You should ${collectiveWisdom[prop][optionIdx]}.')
            break
        default:
            personnalWisdom.push('There is not enough info.')
    }
}

function formatWisdom(wisdom) {
    const formatted = personnalWisdom.join('\n');
    console.log(formatted)
}

formatWisdom(personnalWisdom)
