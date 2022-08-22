let args = process.argv.slice(2);
console.log(args)

let argsArr = args.map(x => Number(x)).filter(x => x > 0 && x !== "" && typeof x === "number")
console.log(argsArr)

function loop() {
  for (let i = 0; i < argsArr.length; i++) {
    beep()

    function beep() {
      setTimeout(() => {
        process.stdout.write('\x07');
        console.log("Time", args[i])
      }, argsArr[i] * 1000);
    }
  }
}

loop()
