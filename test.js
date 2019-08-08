'use strict';

const minimist = require('minimist');

let args = minimist(process.argv.slice(2), {
    alias: {
        e: 'ABSTRUSE_EVENT_TYPE',
        c: 'ABSTRUSE_COMMIT',
        t: 'ABSTRUSE_TAG'
    }
});


console.log('args:', args);