import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { GQueriesModule } from './g-queries/g-queries.module.js';
import { GQueriesService } from './g-queries/g-queries.service.js';
import { GQueriesController } from './g-queries/g-queries.controller.js';

@Module({
  imports: [GQueriesModule],
  controllers: [AppController, GQueriesController],
  providers: [AppService,GQueriesService],
})
export class AppModule {}
