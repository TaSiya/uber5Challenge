/* 
 *qqqw = [3,1] = true
 *aabbb = [2,3]= true
 *aabbbccc = [2,3,3] = false
 *wqwqq = [2,3] = true 
 *eer = [2,1] = true
 *xxyyzzqq = [2,2,2,2] = false
*/

function isPerfectString(checkCharacters){
    charactersMap = {};
    for (let index = 0; index < checkCharacters.length; index++) {
        const char = checkCharacters[index];
        charactersMap[char] ? charactersMap[char] ++ : charactersMap[char] = 1;
    }
    const sortedValuesArray = Object.values(charactersMap).sort();
    let check = false;
    if(sortedValuesArray.length == 2){
        if(sortedValuesArray[0] == 1){ check = true;}
        else if(sortedValuesArray[1] - sortedValuesArray[0] == 1){ check = true; }
    } else{
        for (let index = 0; index < sortedValuesArray.length -1; index++) {
            const deducted = sortedValuesArray[index+1] - sortedValuesArray[index];
            check = deducted == 1 ? true : false;
        }
    }
    return check;
}
const char = 'ssqsq';
const isPerfect = isPerfectString(char)
console.log(`${char} - ${isPerfect}`);
module.exports = isPerfectString;