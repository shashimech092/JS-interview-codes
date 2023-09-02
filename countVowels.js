//Have the function VowelCount(str) take the str string parameter being passed and return the number of vowels the string contains 
// (ie. "All cows eat grass and moo" would return 8). Do not count y as a vowel for this challenge. 

function vowelCount(str) { 
    const vowels = 'aeiou'
    const vowelsArr = vowels.split("")
    const strArr = str.split("")
    let counter = 0
    // split string and compare against vowels string
    for (let item of strArr) {
      for (let char of vowelsArr) {
        if (item.toLowerCase() === char) {
          counter++
        }
      }
    }
    // add counter if included in vowels 
    return counter;       
  }
    
  let output = vowelCount('All cows eat grass and moo')
  console.log(output)