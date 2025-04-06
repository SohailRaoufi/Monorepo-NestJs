import { Test, TestingModule } from '@nestjs/testing';
import { EmployerApiController } from './employer-api.controller';
import { EmployerApiService } from './employer-api.service';

describe('EmployerApiController', () => {
  let employerApiController: EmployerApiController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [EmployerApiController],
      providers: [EmployerApiService],
    }).compile();

    employerApiController = app.get<EmployerApiController>(EmployerApiController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(employerApiController.getHello()).toBe('Hello World!');
    });
  });
});
