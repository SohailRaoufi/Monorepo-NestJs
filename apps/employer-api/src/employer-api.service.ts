import { Injectable } from '@nestjs/common';

@Injectable()
export class EmployerApiService {
  getHello(): string {
    console.log('Hello');

    return 'Hello World!';
  }
}
