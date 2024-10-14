const fs= require('fs');
const { Command } = require('commander');
const program = new Command();


program
  .name('count_words')
  .description('CLI command to count number of words and lines in a text file')
  .version('0.8.0');

program.command('count_words')
       .description("CLI command to count number of words in a text file")
       .argument("<filename>","filename to count the number of words")
       .action((filename)=>{
        fs.readFile(filename,'utf-8',function (err,data){
                    console.log(data.split(' ').length);
                })
       })
program.command('count_lines')
       .description("CLI command to count number of lines in a text file")
       .argument("<filename>","filename to count the number of lines")
       .action((filename)=>{
        fs.readFile(filename,'utf-8',function (err,data){
                    console.log(data.split('/n').length);
                })
       })

program.parse();