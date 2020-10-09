#!/usr/bin/env node

const { exec, spawnSync } = require('child_process');

const [, , name, type] = process.argv;

//COMMAND LINE COLOR OBJECTS
const colors = {
    Reset: '\x1b[0m',
    Bright: '\x1b[1m',
    Dim: '\x1b[2m',
    Underscore: '\x1b[4m',
    Blink: '\x1b[5m',
    Reverse: '\x1b[7m',
    Hidden: '\x1b[8m',
    fg: {
        Black: '\x1b[30m',
        Red: '\x1b[31m',
        Green: '\x1b[32m',
        Yellow: '\x1b[33m',
        Blue: '\x1b[34m',
        Magenta: '\x1b[35m',
        Cyan: '\x1b[36m',
        White: '\x1b[37m',
        Crimson: '\x1b[38m', //القرمزي
    },
    bg: {
        Black: '\x1b[40m',
        Red: '\x1b[41m',
        Green: '\x1b[42m',
        Yellow: '\x1b[43m',
        Blue: '\x1b[44m',
        Magenta: '\x1b[45m',
        Cyan: '\x1b[46m',
        White: '\x1b[47m',
        Crimson: '\x1b[48m',
    },
};

console.log(
    colors.fg.Crimson,
    'BUILDING YOUR PROJECT FOLDER, BE PATIENT, IN THE MEANTIME VISIT DEVNURSERY.COM AND ALEXMERCEDCODER.COM'
);

////CLONE THE REPOSITORY
switch (type) {
    case 'js':
        const jsclone = spawnSync(`npx`, [
            'degit',
            'https://github.com/AlexMercedCoder/Alex-Merced-React-Parcel-Template.git',
            name,
        ]);
        console.log(
            jsclone.stdout
                ? jsclone.stdout.toString()
                : jsclone.stderr.toString()
        );
        break;

    case 'ts':
        const tsclone = spawnSync(`git`, [
            'clone',
            'https://github.com/AlexMercedCoder/React-Typescript-Sass-Template.git',
            name,
        ]);
        console.log(
            tsclone.stdout
                ? tsclone.stdout.toString()
                : tsclone.stderr.toString()
        );
        break;

    default:
        throw 'command should be merced-reactor <ProjectName> <"js" or "ts">';
}

console.log(
    colors.fg.Green,
    `The Project has been cloned, now follow the following steps!!!`
);
console.log(
    colors.fg.Blue,
    `
- cd into project folder => ${name}
- run command "npm install"
- run command "npm run dev" and have fun developing
- Join the Slack/Discord at devNursery.com, be part of the community!
`
);
console.log(
    colors.fg.Magenta,
    `Make sure to subscribe to my youtube channel, find link at AlexMercedCoder.com`
);
