import { Router } from 'express';
import { getUser,createUser } from '../controllers/userController.js';
import { namechanger } from '../middleware/loggers.js';

const router = Router();

// User routes
router.get('/:username', namechanger, getUser);
router.post('/users', createUser);

export default router;
