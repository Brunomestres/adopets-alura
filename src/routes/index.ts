import { Router } from "express";
import { tutorRoutes } from "./tutor.routes";

const router = Router();

router.use("/tutores", tutorRoutes);

export { router };
