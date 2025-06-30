import { Test, TestingModule } from '@nestjs/testing';
import { GQueriesController } from './g-queries.controller.js';

describe('GQueriesController', () => {
  let controller: GQueriesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GQueriesController],
    }).compile();

    controller = module.get<GQueriesController>(GQueriesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
