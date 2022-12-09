import { Router } from "express";

import {
    getCats
} from '../models/cats.js'
const catsRouter = Router()
export default catsRouter;

catsRouter.get('/', async function (req, res) {
    const resultCats = await getCats();
    res.json({ success: true, payload: resultCats })
})