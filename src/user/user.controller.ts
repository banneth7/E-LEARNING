import { Controller, Get } from '@nestjs/common';
import { userService } from './user.service';

@Controller('users')
export class userController {
  constructor(private readonly userService: userService) {}

  @Get()
  getHello(): string {
    return this.userService.getHello();
  }
}
