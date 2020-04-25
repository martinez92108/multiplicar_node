//require
const opt = {
    base: {
        demand: true,
        alias: 'b',
    },
    limite: {

        alias: 'l',
        default: 10
    }
}
const argv = require('yargs')
    .command('listar', 'Iprime en consola la tabla d emultiplicar', opt)
    .command('crear', 'genera un archivo con la tabla d emultiplicar', opt)
    .help()
    .argv;
module.exports = {
    argv
}