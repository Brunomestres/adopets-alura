import { Request, Response } from "express";
import { Tutor } from "../model/tutor";
class TutorController {
  async create(req: Request, res: Response) {
    try {
      const dados = req.body;
      const isTutoExists = await Tutor.findOne({
        where: { email: dados.email },
      });

      if (isTutoExists) {
        return res.status(400).json({ message: "Email já utilizado" });
      }
      const tutor = await Tutor.create(dados);
      return res.json(tutor);
    } catch (error) {
      return res.status(400).json({ error: error });
    }
  }

  async find(req: Request, res: Response) {
    try {
      const tutor = await Tutor.findAll();

      if (tutor.length === 0) {
        return res.status(404).json({ message: "Não encontrado" });
      }
      return res.json(tutor);
    } catch (error) {
      return res.status(400).json({ error: error });
    }
  }

  async findOne(req: Request, res: Response) {
    try {
      const id = req.params.id;

      const tutor = await Tutor.findOne({ where: { id } });

      if (!tutor) {
        return res.status(404).json({ message: "Não encontrado" });
      }
      return res.json(tutor);
    } catch (error) {
      return res.status(400).json({ error: error });
    }
  }
  async delete(req: Request, res: Response) {
    try {
      const id = req.params.id;

      await Tutor.destroy({ where: { id } });

      return res.json({ message: "Tutor deletado com sucesso!" });
    } catch (error) {
      return res.status(400).json({ error: error });
    }
  }
  async update(req: Request, res: Response) {
    try {
      const id = req.params.id;

      const isTutorExists = await Tutor.findOne({ where: { id } });

      if (!isTutorExists) {
        return res.status(404).json({ message: "Não encontrado" });
      }
      const dados = req.body;

      await Tutor.update(dados, { where: { id } });

      return res.json({ message: "Tutor atualizado com sucesso!" });
    } catch (error) {
      return res.status(400).json({ error: error });
    }
  }
}

export { TutorController };
