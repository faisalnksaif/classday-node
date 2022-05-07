import { MigrationInterface } from 'mongo-migrate-ts';
import { Db } from 'mongodb';

export class CreateSettings implements MigrationInterface {
  async up(db: Db): Promise<any> {
    await db.collection('settings').insertOne(
      {
        homeShop: '',
        returnDuration: 7,
        shopSearchDistance: 10000
      },
    );
  }

  async down(): Promise<any> {
    //
  }
}
