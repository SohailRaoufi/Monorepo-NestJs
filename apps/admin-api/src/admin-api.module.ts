import { Module } from '@nestjs/common';
import { AdminApiController } from './admin-api.controller';
import { AdminApiService } from './admin-api.service';
import { SharedModule } from '@app/libs';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { User } from '@app/libs/entities/user/user.entity';
@Module({
  imports: [SharedModule, MikroOrmModule.forFeature([User])],
  controllers: [AdminApiController],
  providers: [AdminApiService],
})
export class AdminApiModule {}
