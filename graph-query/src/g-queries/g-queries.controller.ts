import { Controller, Get } from '@nestjs/common';
import { GQueriesService } from './g-queries.service';
@Controller('votes')
export class GQueriesController {
  constructor(private readonly gQueriesService: GQueriesService) {}

  @Get()
  async fetchVotes() {
    return this.gQueriesService.getVotes();
  }
}
