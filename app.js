

//const { argv } = require('yargs');
const { crearArchivo } = require('./helpers/multiplicar');
const colors = require('colors');
const argv = require('./config/yargs');

console.clear();

//console.log( process.argv );
//console.log( argv );

//console.log( 'base: yargs', argv.base);

crearArchivo( argv.b, argv.l, argv.h )
    .then( nombreArchivo => console.log( nombreArchivo.rainbow, 'creado'))
    .catch( err => console.log(err)); 

//const [ , , arg3='base=5' ] = process.argv;
//const [ , base] = arg3.split('=');

//console.log( base );

//const base = 3;

