module.exports = function check(str, bracketsConfig) {
    let tempArr = str.split('');
    if(tempArr.length % 2 !== 0) {
        return false
    }
    function removePairedBrackets() {
        let previousArrayState  = [...tempArr];
        for(let i = 0; i < tempArr.length; i++) {
            for(let j = 0; j < bracketsConfig.length; j++) {
                if (tempArr[i] == bracketsConfig[j][0] && tempArr[i+1] == bracketsConfig[j][1]) {
                    tempArr.splice(i, 2);
                    break
                } 
            }
    }
    if(previousArrayState.length === tempArr.length) {
        return false
    } else {
      removePairedBrackets()
    }
    }
    removePairedBrackets()
    if (tempArr.length == 0) {
        return true
    } else {
        return false
    }
}
