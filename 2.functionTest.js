function iterate(max, action) {
  for (let i = 0; i < max; i++) {
    action(i);
  }
}

function printDouble(i) {
  i = i * 2;
  console.log(i);
}

function print(i) {
  console.log(i);
}

iterate(5, print);
iterate(5, printDouble);
