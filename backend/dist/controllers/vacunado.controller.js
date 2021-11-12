"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const vacunado_1 = __importDefault(require("../models/vacunado"));
//obtenir tots els vacunats
function getAll(req, res) {
    vacunado_1.default.find({}).then((data) => {
        let status = 200;
        if (data == null)
            status = 404;
        console.log(data);
        return res.status(status).json(data);
    }).catch((err) => {
        console.log(err);
        return res.status(500).json(err);
    });
}
//obtenir vacunat
function getVacunado(req, res) {
    vacunado_1.default.findOne({ "id": req.params.id }).then((data) => {
        let status = 200;
        if (data == null)
            status = 404;
        console.log(data);
        return res.status(status).json(data);
    }).catch((err) => {
        return res.status(500).json(err);
    });
}
//afegir vacunat
function newVacunado(req, res) {
    const vacunado_nuevo = new vacunado_1.default({
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
    });
}
//modificar Vacunat
function updateVacunado(req, res) {
    const nombre_vacunado = req.body.nombre_vacuna;
    const id = req.params.id;
    const nuevaid = req.body.id;
    const descripcion = req.body.descripcion;
    const tecnologia = req.body.tecnologia;
    const fecha_de_aceptacion = req.body.fecha_de_aceptacion;
    vacunado_1.default.update({ "id": id }, { $set: { "nombre_vacunado": nombre_vacunado, "id": nuevaid, "descripcion": descripcion, "tecnologia": tecnologia, "fecha_de_aceptacion": fecha_de_aceptacion } }).then((data) => {
        res.status(201).json(data);
    }).catch((err) => {
        res.status(500).json(err);
    });
}
exports.default = { getAll, getVacunado, newVacunado, updateVacunado };
