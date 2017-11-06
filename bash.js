let commands = require('./commands')

process.stdout.write('prompt > ');

// The stdin 'data' event fires after a user types in a line

process.stdin.on('data', function (input) {
  let cmd = input.toString().trim()
  commands[cmd]();
});
