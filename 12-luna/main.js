function replacer(strNum) {
    const symbols = ['-', ' '];
    for(const symbol of symbols) {
        strNum = strNum.replaceAll(symbol, '');
    }
    return strNum;
}

function genCardNum() {
    let card = "";
    const min = 0;
    const max = 9;
    for(let i = 0; i < 16; i++) {
        if(i%4 == 0) {
            card += "-"
        }
        card += Math.floor(Math.random() * (max - min) + min);
    }
    card = card.replace('-','');
    return card;
}


function algorithmLuna(card) {
    card = replacer(card);
    const validLengths = [13, 15, 16, 19];
    if(!validLengths.includes(card.length) && isNaN(Number(card))) {
        return false;
    }

    let sum = 0;
    let temp = 0;
    for(let i = 0; i < card.length; i++) {
        temp = Number(card[i]);
        if(i%2 === 0){
            temp *= 2;
            if(temp > 9) {
                temp -= 9;
            }
        }
        sum += temp;
    }
    return sum%10 === 0;
}

function hideCardNum(card) {
    console.log(`Вводные данные: ${card}`);
    card = replacer(card);
    const hideStart = card.length - 4;
    const lastFourSymbol = card.slice(hideStart, card.length);
    const result = lastFourSymbol.padStart(card.length, '*');
    return result;
}

function getMessage(card) {
    if(algorithmLuna(card)) {
        console.log(`Ваша карта: ${hideCardNum(card)} - Действительна!)`);
    }
    else {
        console.log(`Ваша карта: ${hideCardNum(card)} - НЕ действительна!(`);
    }
}

const exampleCard = genCardNum();
getMessage(exampleCard);