import { Module } from '@nestjs/common';
import { EmployerApiController } from './employer-api.controller';
import { EmployerApiService } from './employer-api.service';
import { SharedModule } from '@app/libs';

@Module({
  imports: [SharedModule],
  controllers: [EmployerApiController],
  providers: [EmployerApiService],
})
export class EmployerApiModule {}
