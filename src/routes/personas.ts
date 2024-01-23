import {Router} from 'express';
import { createPersona, deletePersona, getPersona, getPersonas, updatePersona } from '../controllers/personas';

const router = Router();

router.get('/', getPersonas);
router.get('/:id', getPersona);
router.post('/', createPersona);
router.put('/:id', updatePersona);
router.delete('/:id', deletePersona);

export default router;