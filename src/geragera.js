const fs = require("fs");


let c = [];


function copia(path, path2) {

  let files = fs.readdirSync(path + path2);

  files.forEach(ffff => {
    let file = (path2.replace('src/app', '') + ffff).replace(/\./g, '_').replace(/-/g, '_').replace(/\//g, '_');;
    let fullPath = path + path2 + ffff;

    if (!fs.lstatSync(fullPath).isDirectory()) {
      let s = fs.readFileSync(path + path2 + ffff, 'UTF8');
      s = s.replace(/\`/g, '\\`');
      s = s.replace(/\$/g, '\\$');

      let f = `
function gera${file}(project, angularPath) {
  let src = \`
${s}
  \`;
  fs.writeFileSync(\`\${angularPath}/${path2}/${ffff}\`, src, \`utf8\`);
}


`;

      c.push(`gera${file}(project, angular);`);
      console.log(f);

    }
    else {
      c.push(`mkDir(\`\${mainDir}/front/project/${fullPath.replace(path, '') + '/'}\`);`);
      copia(path, fullPath.replace(path, '') + '/');
    }
  });
}
copia(require('os').homedir() + '/tcc/', 'mvnabc/');


c.forEach(cc => console.log(cc));