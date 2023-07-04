// With a single integer as the input, generate the following until a = x [series of numbers as shown in below examples]

// Output: (examples)
//  1) input a = 1, then output : 1
//  2) input a = 2, then output : 1, 3
//  3) input a = 3, then output : 1, 3, 5
//  4) input a = 4, then output : 1, 3, 5, 7

// *****   Solution ***** //

const GenrateSeries = (num) => {
  num = Number(num);
  let limit = num * 2;
  let ResultArray = [];

  for (let i = 1; i < limit; i++) {
    i % 2 == 1 ? ResultArray.push(i) : null;
  }

  return ResultArray.join(", ");
};

const result = GenrateSeries(3);
console.log(result);
