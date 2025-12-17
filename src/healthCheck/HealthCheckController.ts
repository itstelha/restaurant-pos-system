import { Controller, Get } from '@nestjs/common';

@Controller('health')
export class HealthCheckController {
  @Get('/')
  async healthCheck(): Promise<string> {
    return 'I am up and runing fast and furious!';
  }
}
