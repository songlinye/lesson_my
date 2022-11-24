var isSquare = function(n) {
    for(let i = 0; i <= n; i++){
        if(i ** 2 == n) {
            return true;
        }
    }
    return false;
}