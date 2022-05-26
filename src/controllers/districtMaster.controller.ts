import DistrictMasterService from '@/services/districtMaster.service';
import { NextFunction, Request, Response } from 'express';

class DistrictMasterController {
  public districtMasterService = new DistrictMasterService();

  public getStates = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const states = await this.districtMasterService.getStates();

      res.status(200).json({ states });
    } catch (error) {
      next(error);
    }
  };

  public getDistrictsByState = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const state = req.params.state
      const districts = await this.districtMasterService.getDistrictsByState(state);

      res.status(200).json({ districts });
    } catch (error) {
      next(error);
    }
  };
}

export default DistrictMasterController;
