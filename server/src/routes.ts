import express from 'express';
import { PrismaFeedbacksRepository } from './repositories/prisma/prisma-feedback-repository';
import { NodemailerMailService } from './services/nodemailer/nodemailer-mail-service';
import { SubmitFeedbackUseCase } from './use-cases/submit-feedback-use-case';

export const routes = express.Router();


routes.post('/feedbacks', async (req, res) => {
  const { type, comment, screenshot } = req.body;

  const prismaFeedbackRepository = new PrismaFeedbacksRepository();
  const nodemailerMailService = new NodemailerMailService();
  const submitFeedbackUseCase = new SubmitFeedbackUseCase(prismaFeedbackRepository, nodemailerMailService);

  await submitFeedbackUseCase.execute({
    type,
    comment,
    screenshot,
  })

  return res.status(201).send();
})