let input = 'turpentine and turtles'

const vowels = ['a', 'e', 'i', 'o', 'u']

let resultArray = [];


// outer loop to check index of input array
for(let i = 0; i < input.length; i++){
   // inner loop that checks vowel index
  for(let o = 0; o < vowels.length; o++){
  
  //conditional that checks input index against vowel index
   if(input[i] === vowels[o]){
   
    //if they are the same, push input[i] to result array
   resultArray.push(input[i]);
   }
  }
  
  //checks if input[i] is equal to e, done on the outer loop because we only need to check once
  if(input[i] === 'e'){
  resultArray.push(input[i]);
  }
  
  //same as line 21
  if(input[i] === 'u'){
  resultArray.push(input[i]);
  }
}

console.log(resultArray.join(' ').toUpperCase());
