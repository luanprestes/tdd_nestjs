import { Module } from '@nestjs/common';
import * as appControllers from './app.controllers';
import * as appServices from './app.services';

const controllers = Object.values(appControllers);
const providers = Object.values(appServices);

@Module({
  imports: [],
  controllers,
  providers,
})
export class AppModule {}
