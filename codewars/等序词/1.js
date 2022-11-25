// 暴力解法

function isIsogram (str) { 
        if(str === '') {
            return true;
        }
        let newStr =str.toLowerCase();
        let arr = newStr.split('')
        for(i=0;i<arr.length;i++){
            for(j = i + 1; j < arr.length; j++) {
                if(arr[i] == arr[j]) {
                    // console.log(false);
                    return false;
                }
             }
        }
        // console.log(true);
        return true;
    }

    isIsogram('enCc');