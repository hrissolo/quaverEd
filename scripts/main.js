export const speech = "We the People of the United States, in Order to form a more perfect Union, establish Justice, insure domestic Tranquility, provide for the common defense, promote the general Welfare, and secure the Blessings of Liberty to ourselves and our Posterity, do ordain and establish this Constitution for the United States of America."
export const speechArray = speech.split(" ");


let counterT = 0;
for (let i=0; i < speechArray.length; i++) {
    if (speechArray[i].startsWith("t")) {
        counterT++
    }
    else if (speechArray[i].startsWith("T")) {
        counterT++
    }
}

let counterE = 0;
for (let i=0; i < speechArray.length; i++) {
    if (speechArray[i].endsWith("e")) {
        counterE++
    }
    else if (speechArray[i].endsWith("e,")) {
        counterE++
    }
}


const wordCountTest = `The speech has ${speechArray.length} words. <br>
There are ${counterT} words starting with the letter T. <br>
There are ${counterE} words ending with the letter E.`

document.getElementById("wordCounter").innerHTML = wordCountTest;
