const fs = require("fs");

let cat = function () {
  process.stdin.on("data", (data) => {
    const cmd = data.toString().trim();

    if (cmd.includes("cat")) {
      let fileName = cmd.slice(4);
      //cmd.slice(5) => bash.js

      //console.log("hello");
      //process.stdout.write(process.cwd());

      fs.readFile(fileName, (err, data) => {
        if (err) throw err;
        else {
          process.stdout.write(data);
          process.stdout.write("\nprompt > ");
          //   console.log(data);
        }
      });

      //   fs.readdir("./", "utf8", (err, files) => {
      //     if (err) {
      //       throw err;
      //     } else {
      //       process.stdout.write("\n" + files.join("\n"));
      //       process.stdout.write("\nprompt > ");
      //     }
      //   });
    }

    //process.stdout.write("You typed: " + cmd);
    //process.stdout.write("\nprompt > ");
  });
};

module.exports = cat;
