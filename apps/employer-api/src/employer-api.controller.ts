import { Controller, Get } from '@nestjs/common';
import { EmployerApiService } from './employer-api.service';

@Controller()
export class EmployerApiController {
  constructor(private readonly employerApiService: EmployerApiService) {}

  @Get()
  getHello(): string {
    return this.employerApiService.getHello();
  }
}
