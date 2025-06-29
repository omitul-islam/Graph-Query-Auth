import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GQueriesModule } from './g-queries/g-queries.module';
import { GQueriesService } from './g-queries/g-queries.service';
import { GQueriesController } from './g-queries/g-queries.controller';

@Module({
  imports: [GQueriesModule],
  controllers: [AppController, GQueriesController],
  providers: [AppService,GQueriesService],
})
export class AppModule {}
