

process.stdout.write('prompt > ');

// The stdin 'data' event fires after a user types in a line

process.stdin.on('data', function (input) {
  if (input.toString() === 'pwd\n') {
    process.stdout.write(process.env.PWD);
  } else if (input.toString().trim() === 'date') {
    let date = new Date()
    process.stdout.write(date.toUTCString())
  }

  process.stdout.write('\nprompt > ');

});
