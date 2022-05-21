import { MigrationInterface } from 'mongo-migrate-ts';
import { Db } from 'mongodb';

import { SECTION } from '../models/classMaster.model';

export class InsertClassMasters implements MigrationInterface {
  async up(db: Db): Promise<any> {
    await db.collection('classmasters').insertMany([
      {
        name: "LKG",
        order: 1,
        section: SECTION.KINDER_GARTEN,
      },
      {
        name: "UKG",
        order: 2,
        section: SECTION.KINDER_GARTEN,
      },
      {
        name: "1",
        order: 3,
        section: SECTION.PRIMARY
      },
      {
        name: "2",
        order: 4,
        section: SECTION.PRIMARY
      },
      {
        name: "3",
        order: 5,
        section: SECTION.PRIMARY
      },
      {
        name: "4",
        order: 6,
        section: SECTION.PRIMARY
      },
      {
        name: "5",
        order: 7,
        section: SECTION.UPPER_PRIMARY
      },
      {
        name: "6",
        order: 8,
        section: SECTION.UPPER_PRIMARY
      },
      {
        name: "7",
        order: 9,
        section: SECTION.UPPER_PRIMARY
      },
      {
        name: "8",
        order: 10,
        section: SECTION.SECONDARY
      },
      {
        name: "9",
        order: 11,
        section: SECTION.SECONDARY
      },
      {
        name: "10",
        order: 12,
        section: SECTION.SECONDARY
      },
      {
        name: "Plus One",
        order: 13,
        section: SECTION.HIGHER_SECONDARY
      },
      {
        name: "Plus Two",
        order: 14,
        section: SECTION.HIGHER_SECONDARY
      }
    ]);
  }

  async down(): Promise<any> {
    //
  }
}
