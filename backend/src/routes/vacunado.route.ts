import { Router } from "express"; 
import vacunadoController from '../controllers/vacunado.controller'

const router = Router();

router.get('/', vacunadoController.getAll);
router.get('/:id', vacunadoController.getVacunado);
router.post('/new',vacunadoController.newVacunado);
router.put('/update/:id', vacunadoController.updateVacunado);


export default router;