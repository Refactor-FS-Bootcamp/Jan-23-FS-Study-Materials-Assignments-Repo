const fs = require('fs');

const writeAndappend = function(){
    console.log('Writing and appending to a file');
    fs.writeFileSync('notepad.txt', 'I am a trainer at Refactor.');
    fs.appendFileSync('notepad.txt', ' I help freshers to become full stack developers.');
}

module.exports = writeAndappend;