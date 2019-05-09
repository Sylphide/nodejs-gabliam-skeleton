import {
  Get,
  RestController,
} from '@gabliam/web-core';
import { inject } from '@gabliam/core';
import { Connection, Repository } from '@gabliam/typeorm';
import { DbConnection } from '../config/db-config';
import { User } from './user';

@RestController('/users')
export class UserController {
  private userRepository: Repository<User>;

  constructor(@inject(DbConnection) connection: Connection) {
    this.userRepository = connection.getRepository<
      User
    >('User');
  }

  @Get('/')
  getUsers() {
    return this.userRepository.find();
  }
}
