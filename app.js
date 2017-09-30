
var cli = require('commander');
var packagejson = require('./package.json');
var sigma = require('./sigman');

cli
  .version(packagejson.version)
  .description(packagejson.description)
  .option('-c, --config', 'use json data for config')
  .option('-l, --list', 'list iteration step values')
  .option('-i, --index <number>', 'starting index value')
  .option('-s, --stop <number>', 'calculation index stop value')
  .option('-f, --function <string>', 'calculation function string', "i")
  .parse(process.argv);

var i = Number.parseInt(cli.index);
var s = Number.parseInt(cli.stop);
var f = cli.function;

if(cli.list == true) {
  sigma.list = true;
}

if (typeof i == 'number' && typeof s == 'number' && typeof f == 'string') {
  result = sigma(i, s, f);
  console.log("final total result: " + result);
} else if (cli.help) {
  cli.help();
}