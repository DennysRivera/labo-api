import { Router } from 'express';

import personsRouter from './persons';

const router = Router();

router.get('/', (req, res) => {
    res.json('Search for /persons');
})
router.use('/persons', personsRouter);

export default router;