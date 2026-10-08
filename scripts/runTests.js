const { spawn } = require('child_process');
//import { spawn } from 'child_process';

const startTime = Date.now();

console.log('Starting Playwright execution...');

// Get any arguments passed after "npm run test:dynamic --"
const playwrightArgs = process.argv.slice(2);

console.log('Playwright arguments:', playwrightArgs);

const testProcess = spawn(
  'npx',
  ['playwright', 'test', ...playwrightArgs],
  {
    shell: true,
    stdio: 'inherit'
  }
);

testProcess.on('close', (exitCode) => {

    const duration = Date.now() - startTime;

    const totalSeconds = Math.floor(duration / 1000);

    const hours = Math.floor(totalSeconds / 3600);

    const minutes = Math.floor(
        (totalSeconds % 3600) / 60
    );

    const seconds = totalSeconds % 60;

    console.log('');
    console.log('Playwright execution completed');
    console.log(
        `Execution time: ${hours}h ${minutes}m ${seconds}s`
    );
    console.log(`Exit code: ${exitCode}`);

    process.exit(exitCode);
});


/*    const { spawn } = require('child_process');

    const startTime = Date.now();

    console.log('Starting Playwright execution...');

    const testProcess = spawn(
    'npx',
    ['playwright', 'test'],
    {
        shell: true,
        stdio: 'inherit'
    }
    );

    testProcess.on('close', (exitCode) => {

        const duration = Date.now() - startTime;

        const totalSeconds = Math.floor(duration / 1000);

        const hours = Math.floor(totalSeconds / 3600);

        const minutes = Math.floor(
            (totalSeconds % 3600) / 60
        );

        const seconds = totalSeconds % 60;

        console.log('');
        console.log('Playwright execution completed');
        console.log(
            `Execution time: ${hours}h ${minutes}m ${seconds}s`
        );
        console.log(`Exit code: ${exitCode}`);
        
        process.exit(exitCode);
    });*/