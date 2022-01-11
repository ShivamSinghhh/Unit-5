function solve(a, b, c) {
   
  if (a + b > c && a + c > b && b + c > a)
  { return "Yes" }
  
  return "No"
 }


function runProgram(input) {
    // Write code here
    input = input.trim().split("\n");
    let test = +input[0];
    
    for (let i = 1; i <= test; i++){
        let [a, b, c] = input[i].trim().split(" ").map(Number);
      //  console.log(a,b,c)
      console.log(solve(a, b, c));
    }
   
  }
  if (process.env.USERNAME === "Cvam's Singhh") {
      runProgram(`4
4 5 13
7 1 8
2 5 4
2 2 2
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
      process.exit(0) ;
    });
  }
