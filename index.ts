import 'reflect-metadata';
import { Gabliam } from '@gabliam/core';
import * as path from 'path';
import ExpressPlugin from '@gabliam/express';
import TypeormPlugin from '@gabliam/typeorm';

let folder: string;
if (process.env.CONFIG_PATH) {
  folder = process.env.CONFIG_PATH;
} else {
  folder = path.resolve(__dirname, './config');
}

const bootstrap = async () => {
  return new Gabliam({
    scanPath: __dirname,
    config: folder,
  })
    .addPlugins(ExpressPlugin, TypeormPlugin)
    .buildAndStart();
};

bootstrap();
