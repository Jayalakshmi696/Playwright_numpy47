
const { spawn } = require('node:child_process');
const { createRequire } = require('node:module');
const path = require('node:path');
const dotenv = require('dotenv');

const startTime = Date.now();
const projectRequire = createRequire(
  path.resolve(__dirname, '../package.json')
);

// 1. Read the environment and separate Playwright arguments.
const args = process.argv.slice(2);
let environment = 'QA';
const playwrightArgs = [];

for (const arg of args) {
  if (arg.startsWith('--env=')) {
    environment = arg.slice('--env='.length).toUpperCase();
  } else {
    playwrightArgs.push(arg);
  }
}

// 2. Validate the selected environment.
const envFiles = {
  QA: 'QA.env',
  UAT: 'UAT.env',
  PROD: 'PROD.env',
};

const envFile = envFiles[environment];

if (!envFile) {
  console.error(`Invalid environment: ${environment}`);
  console.error('Choose QA, UAT, or PROD.');
  process.exit(1);
}

// 3. Load the selected environment file.
const envPath = path.resolve(__dirname, '..', envFile);
const result = dotenv.config({ path: envPath, override: true });

if (result.error) {
  console.error(`Failed to load ${envFile}: ${result.error.message}`);
  process.exit(1);
}

// 4. Validate BASE_URL.
const baseURL = process.env.BASE_URL;

if (!baseURL || !baseURL.trim()) {
  console.error(`BASE_URL is missing in ${envFile}.`);
  process.exit(1);
}

try {
  const parsedURL = new URL(baseURL);

  if (!['http:', 'https:'].includes(parsedURL.protocol)) {
    throw new Error('Only HTTP and HTTPS URLs are supported.');
  }
} catch {
  console.error(
    `Invalid BASE_URL in ${envFile}: "${baseURL}". ` +
    'Provide a valid HTTP or HTTPS URL.'
  );
  process.exit(1);
}

// 5. Display the selected environment.
console.log(`Selected environment: ${environment}`);
console.log(`Loaded environment: ${environment} (${envFile})`);
console.log(`Application URL: ${baseURL}`);
console.log('Playwright arguments:', playwrightArgs);
console.log('Starting Playwright execution...');

// 6. Resolve the Playwright CLI from its public package entry.
const playwrightEntry = projectRequire.resolve('playwright');
const playwrightCli = path.join(
  path.dirname(playwrightEntry),
  'cli.js'
);

// 7. Launch Playwright and pass the loaded environment to it.
const testProcess = spawn(
  process.execPath,
  [playwrightCli, 'test', ...playwrightArgs],
  {
    shell: false,
    stdio: 'inherit',
    env: {
      ...process.env,
      TEST_ENV: environment,
    },
  }
);

testProcess.on('error', (error) => {
  console.error('Failed to start Playwright:', error.message);
  process.exitCode = 1;
});

testProcess.on('close', (exitCode) => {
  const totalSeconds = Math.floor((Date.now() - startTime) / 1000);
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  console.log('');
  console.log('Playwright execution completed');
  console.log(`Environment: ${environment}`);
  console.log(`Execution time: ${hours}h ${minutes}m ${seconds}s`);
  console.log(`Exit code: ${exitCode}`);

  process.exitCode = exitCode ?? 1;
});



/* Recent
const { spawn } = require('child_process');

const startTime = Date.now();

const args = process.argv.slice(2);

let environment = 'QA';
const playwrightArgs = [];

for (const arg of args) {
    if (arg.startsWith('--env=')) {
        environment = arg.split('=')[1].toUpperCase();
    } else {
        playwrightArgs.push(arg);
    }
}

const allowedEnvironments = ['QA', 'UAT', 'PROD'];

if (!allowedEnvironments.includes(environment)) {
    console.error(`Invalid environment: ${environment}`);
    console.error('Choose QA, UAT, or PROD.');
    process.exit(1);
}

console.log(`Selected environment: ${environment}`);
console.log('Playwright arguments:', playwrightArgs);
console.log('Starting Playwright execution...');

// Resolve Playwright's CLI entry point

const { createRequire } = require('node:module');
const path = require('node:path');

const projectRequire = createRequire(
    path.resolve(__dirname, '../package.json')
);

const playwrightPackage = projectRequire.resolve('playwright/package.json');
const playwrightCli = path.join(
    path.dirname(playwrightPackage),
    'cli.js'
);

const testProcess = spawn(
    process.execPath,
    [playwrightCli, 'test', ...playwrightArgs],

    {
        shell: false,
        stdio: 'inherit',
        env: {
            ...process.env,
            TEST_ENV: environment
        }
    }
);

testProcess.on('error', (error) => {
    console.error('Failed to start Playwright:', error);
    process.exitCode = 1;
});

testProcess.on('close', (exitCode) => {
    const duration = Date.now() - startTime;
    const totalSeconds = Math.floor(duration / 1000);

    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    console.log('');
    console.log('Playwright execution completed');
    console.log(`Environment: ${environment}`);
    console.log(`Execution time: ${hours}h ${minutes}m ${seconds}s`);
    console.log(`Exit code: ${exitCode}`);

    process.exitCode = exitCode ?? 1;
});*/

/* Old
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
*/

/*Config
import dotenv from 'dotenv';
import path from 'path';

const environment = (process.env.TEST_ENV || 'QA').toUpperCase();

const envFiles = {
  QA: 'QA.env',
  UAT: 'UAT.env',
  PROD: 'PROD.env'
};

const envFile = envFiles[environment];

if (!envFile) {
  throw new Error(
    `Unsupported environment "${environment}". Choose QA, UAT, or PROD.`
  );
}

const envPath = path.resolve(__dirname, envFile);

const result = dotenv.config({ path: envPath });

if (result.error) {
  throw new Error(
    `Failed to load ${envFile}: ${result.error.message}`
  );
}

// Validate BASE_URL
const baseURL = process.env.BASE_URL;

if (!baseURL || !baseURL.trim()) {
  throw new Error(
    `BASE_URL is missing in ${envFile}. Please configure the application URL.`
  );
}

// Validate that BASE_URL is a valid URL
try {
  const parsedURL = new URL(baseURL);

  if (!['http:', 'https:'].includes(parsedURL.protocol)) {
    throw new Error('Only HTTP and HTTPS URLs are supported.');
  }
} catch {
  throw new Error(
    `Invalid BASE_URL in ${envFile}: "${baseURL}". Please provide a valid HTTP or HTTPS URL.`
  );
}

console.log(`Loaded environment: ${environment} (${envFile})`);
console.log(`Application URL: ${baseURL}`);*/