import mongoose, { Schema, Document} from 'mongoose';

//model grupoinvestigación
const vacunadoSchema = new Schema({
    nombre_vacunado: {
        type: String
    },
    id: {
        type: String
    },
    descripcion: {
        type: String
    },
    tecnologia: {
        type: String
    },
    fecha_de_aceptacion: {
        type: String
    }
   
    });
    

export interface IVacuna extends Document {
    nombre_vacunado: String;
    id: String;
    descripcion: String;
    tecnologia: String;
    fecha_de_aceptacion: String;
}

export default mongoose.model<IVacuna>('Vacunado', vacunadoSchema);