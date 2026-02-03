import { Router } from "express";
import {userManager} from "../../managers/user-manager.js";


const router = Router();

router.get('/vista1', (req, res)=>{
  res.render('vista1')
})

router.get('/', (req, res)=>{
  res.render('form')
})

export default router;