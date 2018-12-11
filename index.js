/* 
 *aabbb = true
 *aabbbccc = false
 *wqwqq = true 
*/

function isPerfectString(str){
    charactersMap = {};
    for (let index = 0; index < str.length; index++) {
        const char = str[index];
        charactersMap[char] ? charactersMap[char] ++ : charactersMap[char] = 1;
    }
    const valuesArray = Object.values(charactersMap).sort();
    let check = true;
    // console.log(valuesArray);
    for (let i = 0; i < valuesArray.length; i++) {
        let occurance = 0;
        for (let j = i; j +1 < valuesArray.length; j++) {
            if(valuesArray[i] === valuesArray[j] || valuesArray[i] + 1 ==valuesArray[j]){
                occurance ++;
            }
        }
        if(occurance >=2){
            check = false;
        }
    }
    return check;
}
 
console.log(isPerfectString("aabbb"));

module.exports = isPerfectString;