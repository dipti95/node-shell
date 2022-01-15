process.stdout.write("prompt > ");

const pwd = require("./pwd.js");
const ls = require("./ls");
const cat = require("./cat.js");
const curl = require("./curl.js");

const done = (output) => {
  console.log(output);
};

pwd();
ls();
cat();
curl();
