import {Router} from 'express';
import { createDonation, receiveWebhook } from '../controllers/donation.controller.js';


const router = Router();
router.get('/', (req, res) => res.send('Server funcionando'));
router.post('/create-donation', createDonation)

router.get('/success', (req, res) => res.send('success'))
router.get('/failure', (req, res) => res.send('failure payment'))
router.get('/pending', (req, res) => res.send('pending transaction'))

router.post('/webhook', receiveWebhook)


export default router;