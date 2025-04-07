import { User } from '@app/libs/entities/user/user.entity';
import { EntityManager, wrap } from '@mikro-orm/postgresql';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AdminApiService {
  constructor(private readonly em: EntityManager) {}
  async getHello() {
    const newUser = this.em.create(User, {
      firstName: 'ahmad',
      lastName: 'Wali',
      email: 'ahmad@gmail.com',
      password: 'Ahmad@1234',
      isActive: true,
    });

    await this.em.persistAndFlush(newUser);
    return wrap(newUser).toJSON();
  }
}
