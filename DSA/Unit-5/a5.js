function solve(n, arr) {
  let max = 0;
  let lo = 0;
  let hi = n - 1;

  while (lo < n) {
    if (hi > lo) {
      let diff = arr[hi] - arr[lo];
      if (diff > max) { max = diff };
      hi--;
    }
    else {
      lo++;
      hi = n - 1;
    }
  }


  console.log(max)

}

function runProgram(input) {
  // Write code here
  input = input.trim().split("\n");
  let test = +input[0];
  let line = 1;

  for (let i = 0; i < test; i++) {
    let n = + input[line++];
    let arr = input[line++].trim().split(" ").map(Number);
    // console.log(n,arr)
    let dp = [0]
    solve(n, arr)
  }

}
if (process.env.USERNAME === "Cvam's Singhh") {
  runProgram(`2
6
7 1 5 3 6 4
4
4 3 2 1
`);
} else {
  process.stdin.resume();
  process.stdin.setEncoding("ascii");
  let read = "";
  process.stdin.on("data", function (input) {
    read += input;
  });
  process.stdin.on("end", function () {
    read = read.replace(/\n$/, "");
    read = read.replace(/\n$/, "");
    runProgram(read);
  });
  process.on("SIGINT", function () {
    read = read.replace(/\n$/, "");
    runProgram(read);
    process.exit(0);
  });
}
