const stdin = process.stdin;
stdin.setRawMode(true);
stdin.setEncoding('utf8');

process.stdin.on('data', (key) => {
  if (key === 'b') {
    process.stdout.write('\x07');
  }
  if (key === '\u0003') {
    process.stdout.write("Thanks for using me, ciao! \n");

    process.exit();
  }
  if (key === '1' || key === '2' || key === '3' || key === '4' || key === '5' || key === '6' || key === '7' || key === '8' || key === '9') {
    process.stdout.write(`Setting timer for ${key} seconds... \n`);
    setTimeout(() => {
      process.stdout.write('\x07');
    }, (Number(key) * 1000));
  }
});
