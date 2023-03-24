const notes = require('./notes.js');
const cmd1 = process.argv[2];
const cmd2 = process.argv[3];
const cmd3 = process.argv[4];

if(cmd1 === 'new'){
    console.log('Creating Note');
    if(cmd2.startsWith('title') && cmd3.startsWith('body')){
        console.log('Title ->>>', cmd2.split('=')[1]);
        console.log('Body ->>>', cmd3.split('=')[1]);
        notes.newNote(cmd2.split('=')[1], cmd3.split('=')[1]);
    }
} else if(cmd1 === 'delete'){
    console.log('Deleting Note');
    if(cmd2.startsWith('title')){
        notes.deleteNote(cmd2.split('=')[1]);
    }
} else if(cmd1 === 'list'){
    console.log('Listing Notes');
    notes.allNotes();
} else if(cmd1 === 'find'){
    console.log('Finding Note');
    if(cmd2.startsWith('title')){
        notes.findNote(cmd2.split('=')[1]);
    }
}