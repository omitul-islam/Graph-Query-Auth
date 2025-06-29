import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GQueriesModule } from './g-queries/g-queries.module';
import { UsersService } from './users/users.service';
import { UsersController } from './users/users.controller';
import { GQueriesService } from './g-queries/g-queries.service';
import { GQueriesController } from './g-queries/g-queries.controller';
import { GQueriesModule } from './g-queries/g-queries.module';

@Module({
  imports: [GQueriesModule],
  controllers: [AppController, UsersController, GQueriesController],
  providers: [AppService, UsersService, GQueriesService],
})
export class AppModule {}
