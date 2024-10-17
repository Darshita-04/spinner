const spinnerChar = ['|','/','-','\\','|'];

let timer = 100;
for (const char of spinnerChar) {
  setTimeout(() => {
    process.stdout.write(`\r${char}   `);
  }, timer) // <= 1s delay to make it noticeable. Can dial it down later.
  timer += 200;
}


