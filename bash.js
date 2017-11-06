let commands = require('./commands')

process.stdout.write('prompt > ');

// The stdin 'data' event fires after a user types in a line

process.stdin.on('data', function (input) {
  input = input.toString().trim()
  let args = input.split(' ')
  let cmd = args[0]

  commands[cmd](args);
});
