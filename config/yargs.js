const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descrpción de la tarea por hacer'
};

const completado = {
    default: true,
    alias: 'c',
    desc: 'Marca como completado o pendiente la terea'
}

const argv = require('yargs')

.command('crear', 'Crear una actividad por hacer', {
        descripcion
    })
    .command('actualizar', 'Actualiza el estado completado deuna tarea', {
        descripcion,
        completado
    })
    .command('borrar', 'Borra un elemento no deseado', {
        descripcion
    })
    .help()
    .argv;

module.exports = {
    argv
}