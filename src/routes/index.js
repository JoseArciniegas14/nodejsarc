import { Router } from "express";
const router = Router()

router.get('/', (req, res) => res.render('index'));
router.get('/about', (req, res) => res.render('about'));
router.get('/contact', (req, res) => res.render('contact'));
router.get('/portfolio', (req, res) => res.render('portfolio'));
router.get('/testimonio', (req, res) => res.render('testimonio'));
router.get('/services', (req, res) => res.render('services'));

export default router