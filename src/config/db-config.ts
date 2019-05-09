import {
  Config,
  InjectContainer,
  Init,
  Container,
  INJECT_CONTAINER_KEY
} from '@gabliam/core';
import { ConnectionManager } from '@gabliam/typeorm';

export const DbConnection = Symbol(
  'DbConnection'
);

@InjectContainer()
@Config()
export class DbConfig {
  @Init()
  async init() {
    const container: Container = (<any>this)[INJECT_CONTAINER_KEY];
    const connectionManager = container.get(ConnectionManager);

    container
      .bind(DbConnection)
      .toConstantValue(connectionManager.getConnection('db'));

    /**
     * Set parser for pg
     * @see https://github.com/typeorm/typeorm/issues/873#issuecomment-328945433
     */
    const types = require('pg').types;

    types.setTypeParser(1700, function(val: any) {
      return parseFloat(val);
    });
  }
}
