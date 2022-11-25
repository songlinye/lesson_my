// Isograms
//  有bug  

function isIsogram(str){
        for(let i = 0; i < str.length ; i ++) {
            if((str.toLowerCase()).indexOf(str.charAt(i),i+1) != -1) {
                // console.log((str.toLowerCase()).indexOf(str.charAt(i),i+1));
                 console.log(false);
                return false;
            }
        }
         console.log(true);
        return true;
    }

isIsogram("abCc")


 