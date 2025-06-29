import { Module } from '@nestjs/common';
import { GQueriesService } from './g-queries.service';
import { GQueriesController } from './g-queries.controller';

@Module({
  providers: [GQueriesService],
  controllers: [GQueriesController],
})
export class GQueriesModule {}
