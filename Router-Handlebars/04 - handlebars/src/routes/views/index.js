import { Router } from "express";
import {userManager} from "../../managers/user-manager.js";

const router = Router();

router.get('/vista1', (req, res)=>{
  res.render('vista1')
})

router.get('/vista2', (req, res)=>{
  const user = {
    first_name: 'Mariel', 
    last_name: 'Norali'
  }
  res.render('vista2', { user })
})

const users = [
   {
   first_name: 'Mariel', 
    last_name: 'Norali'
   },
   {
   first_name: 'Lucas', 
    last_name: 'Abad'
  },
   {
     first_name: 'Nestor', 
     last_name: 'Abad'
   }
]

router.get('/vista3', (req, res)=>{
  res.render('vista3', { users })
})

router.get('/form', (req, res)=>{
  res.render('form')
})

// router.get('/users', async(req, res)=>{
//   const users = await userManager.getAll()
//   res.render('vista3', { users })
// })

export default router;