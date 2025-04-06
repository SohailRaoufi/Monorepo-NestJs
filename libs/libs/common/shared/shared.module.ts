import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Global, Module } from '@nestjs/common';
import { databaseConfig } from '@app/libs';

@Global()
@Module({
  imports: [MikroOrmModule.forRoot(databaseConfig)],
})
export class SharedModule {}
