const cron = require('cron');
const spawn = require('cross-spawn');

const cypressCommand = 'npx cypress run --spec /Users/pedrini/Documents/CheckEnvironmentsPOC/cypress/e2e/checkRender.cy.js --reporter mochawesome --reporter-options "reportDir=cypress/reports"';

function runCypressTest() {
  console.log('Iniciando teste Cypress checkRender.cy.js...');
  const cypressProcess = spawn(cypressCommand, { shell: true });

  cypressProcess.stdout.on('data', (data) => {
    console.log(data.toString());
  });

  cypressProcess.stderr.on('data', (data) => {
    console.error(data.toString());
  });

  cypressProcess.on('exit', (code) => {
    console.log(`Teste Cypress checkRender.cy.js finalizado com código de saída ${code}`);
  });
}

console.log('Script iniciado!');
runCypressTest();

const cronJob = new cron.CronJob('*/10 * * * *', () => {
  console.log('Iniciando teste Cypress checkRender.cy.js...');
  runCypressTest();
});

cronJob.start();
