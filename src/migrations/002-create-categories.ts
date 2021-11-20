import { MigrationInterface } from 'mongo-migrate-ts';
import { Db } from 'mongodb';

export class CreateCategories implements MigrationInterface {
  async up(db: Db): Promise<any> {
    await db.collection('categories').insertMany([{
      name: 'Pillow',
      description: 'pillows',
    },{
      name: 'Bed',
      description: 'beds'
    }])
  }

  async down(db: Db): Promise<any> {
  }
}