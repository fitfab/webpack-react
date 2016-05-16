var childProcess = require('child_process');

/*childProcess.exec('node -v', function ( error, stdout, stderr ) {
    console.log('stdout: ', stdout);
    console.log('stderr: ', stderr);
    if ( error !== null ) {
        console.log('exec error: ', error);
    }
})*/

var child = childProcess.exec('ls -la && node -v && npm -v');

child.stdout.on('data', function ( data ) {
    console.log('stdout: ', data);
});

child.stderr.on('data', function ( data ) {
    console.log('stderr: ', data);
});

child.on('close', function ( code ) {
    console.log('Closing code: ', code);
})