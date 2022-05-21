import { MigrationInterface } from 'mongo-migrate-ts';
import { Db } from 'mongodb';

export class InsertClassMasters implements MigrationInterface {
  async up(db: Db): Promise<any> {
    await db.collection('classmasters').insertMany([
      {
        name: "LKG",
        order: 1,
      },
      {
        name: "UKG",
        order: 2,
      },
      {
        name: "1",
        order: 3,
      },
      {
        name: "2",
        order: 4,
      },
      {
        name: "3",
        order: 5,
      },
      {
        name: "4",
        order: 6,
      },
      {
        name: "5",
        order: 7,
      },
      {
        name: "6",
        order: 8,
      },
      {
        name: "7",
        order: 9,
      },
      {
        name: "8",
        order: 10,
      },
      {
        name: "9",
        order: 11,
      },
      {
        name: "10",
        order: 12,
      },
      {
        name: "Plus One",
        order: 13,
      },
      {
        name: "Plus Two",
        order: 14,
      }
    ]);
  }

  async down(): Promise<any> {
    //
  }
}
