let input = 'avocado'

const vowels = ['a', 'e', 'i', 'o', 'u']

let resultArray = [];

for(let i = 0; i < input.length; i++){
  for(let o = 0; o < vowels.length; o++){
   if(input[i] === vowels[o]){
   resultArray.push(input[i]);
   }

  }
}

console.log(resultArray)
