const fs = require("fs");
const util = require("./util");
const bc = require("./backend/comum");



let jsonData = fs.readFileSync("/home/munif/projetos/estoque.json", "utf8");
let json = JSON.parse(jsonData);
generateProject(json);

function generateProject(project) {
    let mainDir = `/home/munif/temp/${project.description.title.toLowerCase()}`;
    console.log(project.description, "=>",mainDir);
    util.criaPasta(mainDir);
    util.criaPasta(`${mainDir}/front`);
    util.criaPasta(`${mainDir}/src`);
    util.criaPasta(`${mainDir}/src/main`);
    util.criaPasta(`${mainDir}/src/main/resources`);
    util.criaPasta(`${mainDir}/src/main/resources/static`);
    util.criaPasta(`${mainDir}/src/main/java`);
    let java = `${mainDir}/src/main/java`;
    project.description.softwareHouseDomain.toLowerCase().split('.').reverse().forEach(element => {
        java += `/${element}`;
        util.criaPasta(java);
    });
    java += `/projects`;
    util.criaPasta(java);
    java += `/${project.description.title.toLowerCase()}backend`;
    util.criaPasta(java);
    util.criaPasta(`${java}/api`);
    util.criaPasta(`${java}/bootstrap`);
    util.criaPasta(`${java}/configuration`);
    util.criaPasta(`${java}/controllers`);
    util.criaPasta(`${java}/domain`);
    util.criaPasta(`${java}/repository`);
    util.criaPasta(`${java}/service`);
    
    
    bc.geraPomXML(project, mainDir);
    bc.geraApplicationDevProperties(project, mainDir);
    bc.geraApplicationProdProperties(project, mainDir);
    bc.geraApplicationProperties(project, mainDir);
    bc.geraIndexHtml(project, mainDir);
    bc.geraApplication(project, java);
    bc.geraDomain(project, java);
    bc.geraDatabaseConfiguration(project, java);
    bc.geraSecurityConfiguration(project, java);
    bc.geraWebConfiguration(project, java);
    bc.geraRepositories(project, java);
    bc.geraServices(project, java);
    bc.geraApis(project, java);
    bc.geraHelloController(project, java);
    bc.geraSeed(project, java);
}
