// Requireds
const fs = require('fs');
// const fs = require('express');
// const fs = require('../fs');
var colors = require('colors/safe');

let listarTabla = (base, limite) => {

    for (let i = 1; i <= limite; i++) {

        console.log(`${colors.green(base) } x ${colors.cyan(i)} = ${colors.yellow(base*i)}`);
    }

}

let crearArchivo = (base, limite) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(colors.red(`El valor introducido ${base} no es número`));
            return;
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += `${base} x ${i} = ${base*i}\n`;
        }

        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err)
                reject(err)
            else
                resolve(`tabla-${base}.txt`)
        });

    });
}

module.exports = {
    crearArchivo,
    listarTabla
}