import _ from 'lodash'

import districtMasterModel from '@/models/districtMaster.model';
import { IDistrictMaster } from '@/interfaces/districtMaster.interface';

class DistrictMasterService {
  public districtMasterModel = districtMasterModel;

  public async getStates(): Promise<IDistrictMaster[]> {
    return this.districtMasterModel.distinct('state')
  }

  public async getDistrictsByState(state: string): Promise<IDistrictMaster[]> {
    return this.districtMasterModel.find({ state })
  }
}

export default DistrictMasterService;
