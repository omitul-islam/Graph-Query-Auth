import { Controller, Get, Param } from '@nestjs/common';
import { GQueriesService } from './g-queries.service';

@Controller('/votes')
export class GQueriesController {
constructor(private readonly gQueriesService: GQueriesService) {}

@Get()
async fetchVotes() {
  console.log('fetchVotes called');
  return this.gQueriesService.getVotes();
}

@Get('id/:id')
async fetchVoteById(@Param('id') id: string) {
  console.log('fetchVoteById called with id:', id);
  return this.gQueriesService.getVoteById(id);
}

}
