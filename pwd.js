let x = function () {
  process.stdin.on("data", (data) => {
    const cmd = data.toString().trim();
    if (cmd === "pwd") {
      //console.log("hello");
      process.stdout.write(process.cwd());
    }

    //process.stdout.write("You typed: " + cmd);
    process.stdout.write("\nprompt > ");
  });
};

module.exports = x;

//console.log(process.cwd());
