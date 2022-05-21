import ClassMasterService from '@/services/classMaster.service';
import { NextFunction, Request, Response } from 'express';

class ClassMasterController {
  public classMasterService = new ClassMasterService();

  public create = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const classMaster = await this.classMasterService.create(req.body);

      res.status(200).json({ class: classMaster });
    } catch (error) {
      next(error);
    }
  };

  public getAll = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const classes = await this.classMasterService.getAll();

      res.status(200).json(classes);
    } catch (error) {
      next(error);
    }
  };

  public get = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const classDetails = await this.classMasterService.get(req.params.id as string);

      res.status(200).json(classDetails);
    } catch (error) {
      next(error);
    }
  };
}

export default ClassMasterController;
