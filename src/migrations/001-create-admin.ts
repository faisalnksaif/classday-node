import bcrypt from 'bcrypt';
import { MigrationInterface } from 'mongo-migrate-ts';
import { Db } from 'mongodb';

export class CreateAdmin implements MigrationInterface {
  async up(db: Db): Promise<any> {
    const hashedPassword = await bcrypt.hash('admin123', 10);

    await db.collection('users').insert({
      username: 'admin',
      password: hashedPassword,
      role: ' admin',
    });
  }

  async down(): Promise<any> {}
}
