import fs from 'fs';
import { execSync } from 'child_process';

async function globalSetup() {

    console.log('===== GLOBAL SETUP STARTED =====');

    const allureResults = 'allure-results';

    // Delete old Allure results
    if (fs.existsSync(allureResults)) {
        fs.rmSync(allureResults, {
            recursive: true,
            force: true
        });

        console.log('Old allure-results folder deleted.');
    }

    // Create fresh Allure results folder
    fs.mkdirSync(allureResults, {
        recursive: true
    });

    console.log('Fresh allure-results folder created.');

    // This function will run AFTER all tests finish
    return async function globalTeardown() {

        console.log('===== GLOBAL TEARDOWN STARTED =====');
        console.log('Generating Allure report...');

        if (fs.existsSync('allure-results')) {

            execSync(
                'npx allure generate allure-results -o allure-report --clean', 
                {
                    stdio: 'inherit'
                }
            );

            console.log(
                'Allure report generated successfully at allure-report/index.html'
            );

        } else {

            console.log(
                'No allure-results folder found. Allure report was not generated.'
            );
        }

        console.log('===== GLOBAL TEARDOWN COMPLETED =====');
    };
}

export default globalSetup;

/*import fs from 'fs';
import { execSync } from 'child_process';

export async function globalSetup() {
    const allureResults = 'allure-results';

    if (fs.existsSync(allureResults)) {
        fs.rmSync(allureResults, {
            recursive: true,
            force: true
        });

        console.log('Old Allure results deleted.');
    }

    fs.mkdirSync(allureResults, {
        recursive: true
    });

    console.log('Fresh allure-results folder created.');
}

export async function globalTeardown() {
    console.log('Generating Allure report...');

    if (fs.existsSync('allure-results')) {
        execSync(
            'npx allure generate allure-results -o allure-report --clean --single-file',
            { stdio: 'inherit' }
        );

        console.log('Allure report generated at allure-report/index.html');
    }
}*/