import { NextFunction, Request, Response } from 'express';
import SchoolService from '@/services/school.service';

class SchoolController {
  public schoolService = new SchoolService();

  public create = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const school = await this.schoolService.create(req.body);

      res.status(200).json(school);
    } catch (error) {
      next(error);
    }
  };
}

export default SchoolController;
