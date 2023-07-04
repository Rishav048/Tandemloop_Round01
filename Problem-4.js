// Get the total count of number listed in the dictionary which is multiple of [1,2,3,4,5,6,7,8,9]
//     (examples)
//     input: [1,2,8,9,12,46,76,82,15,20,30]
//     Output: {1: 11, 2: 8, 3: 4, 4: 4, 5: 3, 6: 2, 7: 0, 8: 1, 9: 1}

// **** Solution **** //

const CountMultiples = (inputArray) => {
  let dictionary = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  let resultObject = {};

  dictionary.map((el) => (resultObject[el] = 0));

  for (let i = 0; i < inputArray.length; i++) {
    for (let j = 0; j < dictionary.length; j++) {
      if (inputArray[i] % dictionary[j] == 0) {
        resultObject[dictionary[j]]++;
      }
    }
  }

  return resultObject;
};

let result = CountMultiples([1, 2, 8, 9, 12, 46, 76, 82, 15, 20, 30]);
console.log(result);
