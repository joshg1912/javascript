let input = 'turpentine and turtles'

const vowels = ['a', 'e', 'i', 'o', 'u']

let resultArray = [];

for(let i = 0; i < input.length; i++){
  for(let o = 0; o < vowels.length; o++){
   if(input[i] === vowels[o]){
   resultArray.push(input[i]);
   }
  }
  if(input[i] === 'e'){
  resultArray.push(input[i])
  }
  if(input[i] === 'u'){
  resultArray.push(input[i]);
  }
}

console.log(resultArray.join(' ').toUpperCase());
