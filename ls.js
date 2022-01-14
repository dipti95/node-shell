const fs = require("fs");

let ls = function () {
  process.stdin.on("data", (data) => {
    const cmd = data.toString().trim();
    if (cmd === "ls") {
      //console.log("hello");
      //process.stdout.write(process.cwd());
      fs.readdir("./", "utf8", (err, files) => {
        if (err) {
          throw err;
        } else {
          process.stdout.write("\n" + files.join("\n"));
          process.stdout.write("\nprompt > ");
        }
      });
    }

    //process.stdout.write("You typed: " + cmd);
    //process.stdout.write("\nprompt > ");
  });
};

module.exports = ls;
