const argv = require('./config/yargs').argv;
const colors = require('colors');
const { crearArchivo } = require('./multiplicar/operaciones');
const { listarTabla } = require('./multiplicar/operaciones');

let comanodo = argv._[0];
switch (comanodo) {
    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;

    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`archivo creado: ${archivo}`.green))
            .catch(e => console.log(e));
        break;
    default:
        console.log('comando desconosido')
}