import {Router} from 'express';
import { createDonation } from '../controllers/donation.controller.js';


const router = Router();

router.get('/create-donation', createDonation)

router.get('/success', (req, res) => res.send('success'))

router.get('/pending', (req, res) => res.send('pending transaction'))

router.get('/webhook', (req, res) => res.send('webhook'))


export default router;