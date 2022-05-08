import { NextFunction, Request, Response } from 'express';
import ClassService from '@/services/class.service';

class ClassController {
  public classService = new ClassService();

  public create = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const createdClass = await this.classService.create(req.body);

      res.status(200).json({ class: createdClass });
    } catch (error) {
      next(error);
    }
  };

  public getAllBySchool = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const classes = await this.classService.getAllBySchool(req.params.school as string);

      res.status(200).json(classes);
    } catch (error) {
      next(error);
    }
  };

  public get = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const classDetails = await this.classService.get(req.params.class as string);

      res.status(200).json(classDetails);
    } catch (error) {
      next(error);
    }
  };
}

export default ClassController;
