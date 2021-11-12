import { Request, Response} from "express";
import { getAllJSDocTags } from "typescript";
import vacuna from "../models/vacunado";


//obtenir tots els vacunats
function getAll (req:Request, res:Response): void {
    vacuna.find({}).then((data)=>{
        let status: number = 200;
        if(data==null) status = 404;
        console.log(data);
        return res.status(status).json(data);
    }).catch((err) => {
        console.log(err);
        return res.status(500).json(err);
    })
}

//obtenir vacunat
function getVacunado (req:Request, res:Response): void {
    vacuna.findOne({"id":req.params.id}).then((data)=>{
        let status: number = 200;
        if(data==null) status = 404;
        console.log(data);
        return res.status(status).json(data);
    }).catch((err) => {
        return res.status(500).json(err);
    })
}

//afegir vacunat
function newVacunado (req:Request, res:Response): void {
    const vacunado_nuevo = new vacuna({
        "nombre_vacunado": req.body.nombre_vacuna,
        "id": req.body.id,
        "descripcion": req.body.descripcion,
        "tecnologia": req.body.tecnologia,
        "fecha_de_aceptacion": req.body.fecha_de_aceptacion
    });
    
    console.log(req.body);
    vacunado_nuevo.save().then((data) => {
        return res.status(201).json(data);
    }).catch((err) => {
        return res.status(500).json(err);
    })
}

//modificar Vacunat
function updateVacunado (req:Request, res:Response): void {
    const nombre_vacunado: String = req.body.nombre_vacuna;
    const id = req.params.id;
    const nuevaid = req.body.id;
    const descripcion: String = req.body.descripcion;
    const tecnologia: String = req.body.tecnologia;
    const fecha_de_aceptacion: String = req.body.fecha_de_aceptacion;


    vacuna.update({"id": id}, {$set: {"nombre_vacunado": nombre_vacunado, "id": nuevaid, "descripcion": descripcion, "tecnologia": tecnologia, "fecha_de_aceptacion": fecha_de_aceptacion}}).then((data) => {
        res.status(201).json(data);
    }).catch((err) => {
        res.status(500).json(err);
    })
}


export default { getAll, getVacunado, newVacunado, updateVacunado};