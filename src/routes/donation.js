import {Router} from 'express';
import { createDonation } from '../controllers/donation.controller.js';


const router = Router();

router.post('/create-donation', createDonation)

router.get('/success', (req, res) => res.send('success'))
router.get('/failure', (req, res) => res.send('failure payment'))
router.get('/pending', (req, res) => res.send('pending transaction'))

router.post('/webhook', (req, res) => res.send('webhook'))


export default router;