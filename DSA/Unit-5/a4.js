function solve(str1, str2) {
    let count = 0;
    let i = 0;
    let j = 0;

    while (i < str1.length && j < str2.length) {
        
        if (str1[i] == str2[j]) {
            count++;
            i++;
            j++;
        }
        else { j++; }

        
    }

    if (count === str1.length) {
        console.log("YES")
    }
    else { console.log("NO") }

}


function runProgram(input) {
    // Write code here
    input = input.trim().split("\n");
    let test = +input[0];
    let line = 1;

    for (let i = 0; i < test; i++){
        let str1 = input[line++].trim();
        let str2 = input[line++].trim();
       // console.log(str1, str2)
        solve(str1,str2)
    }
   
  }
  if (process.env.USERNAME === "Cvam's Singhh") {
      runProgram(`2
abc
adbce
ax
xaa`);
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
