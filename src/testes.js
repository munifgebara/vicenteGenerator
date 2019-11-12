const fs = require("fs");

function insereLinhaAntes(arquivo, marcador, novaLinha) {
    let text = fs.readFileSync(arquivo, "utf8");
    if (text.indexOf(novaLinha) != -1) {
        return;
    }
    let data = text.split("\n");
    let newData = [];
    data.forEach(linha => {
        if (linha.indexOf(marcador) != -1) {
            newData.push(novaLinha);
        }
        newData.push(linha);
    })



    let saida = newData.join("\n");

    fs.writeFileSync(arquivo, saida, "utf8");
}



insereLinhaAntes(require('os').homedir() + '/projetos/vicenteGenerator/f.txt', 'marcador', 'NOVA55');