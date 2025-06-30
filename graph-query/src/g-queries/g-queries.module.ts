import { Module } from '@nestjs/common';
import { GQueriesService } from './g-queries.service.js';
import { GQueriesController } from './g-queries.controller.js';

@Module({
  providers: [GQueriesService],
  controllers: [GQueriesController],
})
export class GQueriesModule {}
