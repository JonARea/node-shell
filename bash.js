

process.stdout.write('prompt > ');

// The stdin 'data' event fires after a user types in a line

process.stdin.on('data', function (input) {
  console.log(input.toString().toLowerCase());
  if (input.toString().toLowerCase() == 'pwd\n') {
    return process.stdout.write(process.env.PWD);
  }

  process.stdout.write('\nprompt > ');

});
