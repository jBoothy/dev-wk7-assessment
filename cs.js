const addToZero=(nums)=>{
    let index1 = 0;
    let index2 = nums.length - 1;
    while(index1 !== index2){
        if(nums[index1] + nums[index2] === 0){
            return true
        } else if(nums[index1] + nums[index2] > 0){
            index2--
        } else if(nums[index1] + nums[index2] < 0){
            index1++
        }
    } return false
}

// console.log(addToZero([8, 6, 7, 5, 3, 0, 9])) // false
// console.log(addToZero([2, 4, 6, 8, -4])) // true

// I think it would be O(1) because of the while loop

const hasUniqueChars=(chars)=>{
    let unique = true;
    for(let i=0;i<chars.length;i++){
        for(let x = i+1; x<chars.length;x++){
            if(chars[i]===chars[x]){
                unique = false
            }
        }
    } return unique
}

// console.log(hasUniqueChars('Monday')); // true
// console.log(hasUniqueChars('Moonday')); // false

// I think it would be O(n^2) because of nested for loop

const isPangram=(str)=>{
    let strArr = str.toLowerCase();
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    
    for (let i = 0; i < alphabet.length; i++) {
      if(strArr.indexOf(alphabet[i]) < 0){
        return false;
      }
    }
    return true;
  }

// console.log(isPangram("The quick brown fox jumps over the lazy dog!")); // true
// console.log(isPangram("I like cats, but not mice.")); // false

// I think it's O(2)?

const longestWord =(wordsArr)=>{
    let longest = 0
    wordsArr.map((e)=>e.length>longest?longest=e.length:null)
    return longest
}
console.log(longestWord([`hello`, `hi`])) // 5

// I think O(n)