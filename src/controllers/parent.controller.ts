import { NextFunction, Request, Response } from 'express';
import ParentService from '@/services/parent.service';

class ParentController {
  public parentService = new ParentService();

  public create = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const parent = await this.parentService.create(req.body);

      res.status(200).json(parent);
    } catch (error) {
      next(error);
    }
  };

  public getAllBySchool = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const parents = await this.parentService.getAllBySchool(req.params.school);

      res.status(200).json(parents);
    } catch (error) {
      next(error);
    }
  };
}

export default ParentController;
