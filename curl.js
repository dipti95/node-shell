const request = require("request");

let curl = function () {
  process.stdin.on("data", (data) => {
    const cmd = data.toString().trim();

    if (cmd.includes("curl")) {
      let name = cmd.slice(5);

      request(name, (err, reponse, body) => {
        if (err) throw err;
        else {
          process.stdout.write("body:", body);
          process.stdout.write("\nprompt > ");
        }
      });
    }
  });
};

module.exports = curl;
