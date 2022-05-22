import { MigrationInterface } from 'mongo-migrate-ts';
import { Db } from 'mongodb';

export class CreateIndexUniqueClassesBySchool implements MigrationInterface {
  async up(db: Db): Promise<any> {
    await db.collection('classes').createIndex({
      name: 1,
      division: 1,
      school: 1
    }, { unique: true })
  }

  async down(): Promise<any> {
    //
  }
}
