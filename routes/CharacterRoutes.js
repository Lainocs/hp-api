import express from 'express';
import { getCharacters, getCharacter } from '../controllers/CharacterController.js';

const router = express.Router();

router.get('/', getCharacters)
router.get('/:slug', getCharacter)

export default router;