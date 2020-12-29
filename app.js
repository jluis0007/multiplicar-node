const argv = require('./config/yargs').argv;
const colors = require('colors');
const { listarTabla, crearArchivo } = require('./multiplicar/multiplicar');
let comando = argv._[0];
//let base = 'asc';
switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log('Archivo creado:', `${ archivo }`.red))
            .catch(e => console.log(e));
        break;
    default:
        console.log('Comando no reconocido');
}
console.log(argv);
// let argv2 = process.argv;
// let parametro = argv[2];
// let base = parametro.split("=")[1]
// console.log(argv);