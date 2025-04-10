// const express = require('express')
import express, { Application, Request, Response } from 'express';
import cors from 'cors';

const app: Application = express();
// const port = 3000

//parser
app.use(express.json());
app.use(cors());

const getAController = (req: Request, res: Response) => {
  const a = 10;
  // res.send('Hello World!')
  res.send(a);
};
app.get('/', getAController);

console.log('directory address is :' + process.cwd());

export default app;
