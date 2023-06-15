// routes/jobRoutes.ts

import { Router } from 'express';
import { createJob, updateJob } from '../controllers/jobPostController';

const router: Router = Router();

router.post('/', createJob);
router.put('/:id', updateJob);

export default router;
