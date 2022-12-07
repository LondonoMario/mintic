const mongoose = require('mongoose')
const Schema = mongoose.Schema

let ordenesSchema = new Schema({
    _id:{
        type: Schema.Types.ObjectId,
        required: true,
    },
    fecha: {
        type: Date,
        required: true,
    },
    ciudad: {
        type: String,
        required: true,
    },
    direccion: {
        type: String,
        required: true,
    },
    estado: {
        type: String,
        required: true,
    },
    userId: {
        type: Schema.Types.ObjectId, ref: 'User'
    }

}, {
    collection: 'ordenes'
})

module.exports = mongoose.model('Ordenes', ordenesSchema)