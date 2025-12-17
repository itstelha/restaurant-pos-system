import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    const date = new Date().toLocaleString();
    return `Hello World! Today is ${date}`;
  }
}
