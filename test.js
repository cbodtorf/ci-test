'use strict';

const minimist = require('minimist');
const fs = require('fs');

const version = fs.readFileSync('VERSION', {encoding: 'utf-8'})
let args = minimist(process.argv.slice(2), {
    alias: {
        e: 'ABSTRUSE_EVENT_TYPE',
        c: 'ABSTRUSE_COMMIT',
        t: 'ABSTRUSE_TAG'
    }
});


console.log('args:', args);
console.log('version:', version);