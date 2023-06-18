function find(haystack, needle) {
    //console.log("array: " + haystack);   
    let start = 0, end = haystack.length - 1, middle = null;
    while (start <= end) {
        //novas posicoes do meio a cada iteração
        middle = Math.trunc((start + end) / 2);
        if (needle < haystack[middle]) {
            end = middle - 1;
        }
        else if (needle > haystack[middle]) {
            start = middle + 1;
        }
        else if (needle === haystack[middle]) {
            return middle;
        }
    }
    throw new Error("Value not in array");
    /*if(haystack.length > 2) {
        //console.log('hayStack: ' + haystack);
        let middle = findMiddle(haystack, needle);
        //console.log(`middle: ${middle}`);
        //console.log("index middle: " + middle + "from: " + haystack);
        //subarray da esquerda
        if(needle < haystack[middle]) {
            return find(haystack.slice(0, middle), needle);
        }else if(needle > haystack[middle]){
            //subarray da direita
            return find(haystack.slice(middle, haystack.length - 1), needle);
        }else if(needle === haystack[middle]){
            return middle;
        }else{
            throw new Error("Value not in array");
        }
    }else{
            if(haystack.includes(needle)) {
                return haystack.indexOf(needle);
            }else{
                throw new Error("Value not in array");
            }
    }*/
}
function findMiddle(haystack, needle) {
    let lengthArr = haystack.length - 1;
    //index middle
    let m = 0;
    if (lengthArr >= 2) {
        m = lengthArr % 2 === 0 ? lengthArr / 2 : (lengthArr - (lengthArr % 2)) / 2;
        return m;
    }
    else {
        return haystack.indexOf(needle);
    }
}
console.log(find([6], 6)); //0
console.log(find([1, 3, 4, 6, 8, 9, 11], 6)); //3
console.log(find([1, 3, 4, 6, 8, 9, 11], 1)); //0
console.log(find([1, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 634], 144)); //9
console.log(find([1, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377], 21)); //5
console.log(find([1, 3, 4, 6, 8, 9, 11], 7)); //Value not in array
console.log(find([1, 3, 4, 6, 8, 9, 11], 0)); //'Value not in array
console.log(find([1, 3, 4, 6, 8, 9, 11], 13)); //'Value not in array
console.log(find([], 1)); //Value not in array
console.log(find([1, 2], 0)); //Value not in array
