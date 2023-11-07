const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const testName = process.argv[2];

if (!testName) {
  console.error('Please provide a test name.');
  process.exit(1);
}

const testMapPath = path.resolve(__dirname, 'src/testMap.json');

try {
  const testMapContent = fs.readFileSync(testMapPath, 'utf8');
  const testMap = JSON.parse(testMapContent);

  if (testMap.hasOwnProperty(testName)) {
    const testFilePath = path.resolve(__dirname, testMap[testName]);
    execSync(`npx jest ${testFilePath}`, { stdio: 'inherit' });
  } else {
    console.error(`Test with name "${testName}" not found in the test map.`);
    process.exit(1);
  }
} catch (error) {
  console.error(`Error: ${error.message}`);
  process.exit(1);
}