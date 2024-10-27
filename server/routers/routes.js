import express, { request, response } from 'express';
import { addtodo } from '../controller/todo-controler.js';

const route =express.Router();
route.post('/todos',addtodo)

export default route;
