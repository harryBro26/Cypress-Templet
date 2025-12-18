#!/usr/bin/env node

const fs = require('fs-extra');
const path = require('path');

async function createProject() {
    // 1. Define the source path (where the template lives inside the installed package)
    const sourcePath = path.join(__dirname, '..', 'template');
    
    // 2. Define the destination path (the directory where the user ran npx)
    const destinationPath = process.cwd();

    // 3. Optional: Get the project name from command line arguments
    //    e.g., npx @rajibdhl/cypress-template my-project
    const projectName = process.argv[2]; 
    let finalDest = destinationPath;

    if (projectName) {
        // If a name is provided, create the directory first
        finalDest = path.join(destinationPath, projectName);
        await fs.ensureDir(finalDest); // ensureDir is like mkdir -p
        console.log(`\nCreating project in: ${finalDest}`);
    } else {
        console.log(`\nCopying template files to current directory: ${finalDest}`);
    }

    try {
        // 4. Copy the entire 'template' directory content to the destination
        await fs.copy(sourcePath, finalDest, { overwrite: true });

        // 5. Update package.json with project name
        const pkgPath = path.join(finalDest, 'package.json');
        const pkg = await fs.readJson(pkgPath);
        pkg.name = projectName || path.basename(finalDest);
        pkg.version = '1.0.0';
        await fs.writeJson(pkgPath, pkg, { spaces: 2 });

        console.log(`\n✨ Cypress template successfully initialized!`);
        console.log(`\nTo get started, run the following commands:`);
        
        if (projectName) {
            console.log(`  cd ${projectName}`);
        }
        
        console.log(`  npm install`);
        console.log(`  npx cypress open`);
        
    } catch (err) {
        console.error('\n🚫 Error copying template files:', err.message);
        process.exit(1);
    }
}

createProject();