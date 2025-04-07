import { Controller, Get } from '@nestjs/common';
import { AdminApiService } from './admin-api.service';

@Controller()
export class AdminApiController {
  constructor(private readonly adminApiService: AdminApiService) {}

  @Get()
  async getHello() {
    return await this.adminApiService.getHello();
  }
}
