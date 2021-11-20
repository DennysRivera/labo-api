import { Router } from 'express';

import {
  getAllRegistered,
  createPerson,
  deletePerson,
//updatePerson,  
} from '../controllers/persons';

const router = Router();

router.get('/', getAllRegistered);
router.post('/', createPerson);
router.delete('/:id', deletePerson);
//router.delete('/:id', updatePerson);

export default router;
