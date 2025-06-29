import { Test, TestingModule } from '@nestjs/testing';
import { GQueriesService } from './g-queries.service';

describe('GQueriesService', () => {
  let service: GQueriesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GQueriesService],
    }).compile();

    service = module.get<GQueriesService>(GQueriesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
