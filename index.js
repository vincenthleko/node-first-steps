import {greet} from './greet.js';
// import {yo} from './yo.js';

// console.log(greet('vincent'));
// console.log(yo('vincent'))

import chalk from 'chalk';
//import the greet module that is in the current folder
// import greet from './greet.js'

// const styledMessage = chalk.bgBlueBright.black(greet('vincent'));
// console.log(styledMessage)

import cowsay from 'cowsay';
import figlet from 'figlet';


console.log(chalk.bgBlueBright.black(cowsay.say({
    text : greet('vincent'),
    e : "oO",
    T : "U "
})));



figlet("Hello World!!", function (err, data) {
  if (err) {
    console.log("Something went wrong...");
    console.dir(err);
    return;
  }
  console.log(chalk.bgBlueBright.black(data));
});