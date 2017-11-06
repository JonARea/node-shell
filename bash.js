

process.stdout.write('prompt > ');

// The stdin 'data' event fires after a user types in a line

process.stdin.on('data', function (input) {
  let cmd = input.toString().trim()
  if (cmd === 'pwd') {
    process.stdout.write(process.env.PWD);
  } else if (cmd === 'date') {
    let date = new Date()
    process.stdout.write(date.toUTCString())
  }

  process.stdout.write('\nprompt > ');

});
