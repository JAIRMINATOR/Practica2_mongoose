const mongoose = require ('mongoose')
const url_db = 'mongodb://localhost:27017'

mongoose.connect(url_db)
.then(() => {
    console.log('Conexion exitosa')
})
.catch((err) => {
    console.log('No funciono')
})
//Base de datos
const esquema_alumnos = new mongoose.Schema({
    name: {
        type:String
    },
    apepat: {
        type:String
    },
    apemat: {
        type:String
    },
    telNumber: {
        type:Number
    },
    fechaNac: {
        type:Date
    }
})

const alumnos = new mongoose.model('tabla de regstro de alumnos',esquema_alumnos)

alumnos.create( {
    name:'jesus',
    apepat:'salazar',
    apemat:'padilla',
    telNumber: 1234567,
    fechaNac: new Date('2000, 01, 14')
})