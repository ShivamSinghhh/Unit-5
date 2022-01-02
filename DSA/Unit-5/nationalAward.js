function solve(n, arr) {
  let zero = [];
  let one = [];
  let two = [];

  for (let i = 0; i < n; i++){
     
    if (arr[i] === 0) { zero.push(arr[i]) }
    else if (arr[i] === 1) { one.push(arr[i]) }
    else if (arr[i] === 2) { two.push(arr[i]) }
  }

  
  let ans = [...zero, ...one, ...two];
  console.log(ans.join(" "))

}
function runProgram(input) {
    // Write code here;
    input = input.trim().split("\n");
    let test = +input[0];
    let line = 1;

    for (let i = 0; i < test; i++){
        let n = +input[line++];
        let arr = input[line++].trim().split(" ").map(Number);
       //  console.log(n,arr)
        solve(n,arr)
    }
   
  }
  if (process.env.USERNAME === "Cvam's Singhh") {
      runProgram(`3
1
2
3
2 0 1
4
2 0 2 1`);
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
      process.exit(0) ;
    });
  }
