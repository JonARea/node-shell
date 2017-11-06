var fs = require('fs');

let commands = {
  pwd: function(){process.stdout.write(process.env.PWD)
    process.stdout.write('\nprompt > ')},
  date: function(){
    let date = new Date();
    process.stdout.write(date.toUTCString())},
  ls: function(){fs.readdir('.', function(err, files) {
    if (err) throw err;
    files.forEach(function(file) {
      process.stdout.write(file.toString() + "\n");
    })
    process.stdout.write("prompt > ");
    });
}

}


// if (cmd === 'pwd') {
//   process.stdout.write(process.env.PWD);
// } else if (cmd === 'date') {
//   let date = new Date()
//   process.stdout.write(date.toUTCString())
// }

// process.stdout.write('\nprompt > ');


module.exports = commands;
