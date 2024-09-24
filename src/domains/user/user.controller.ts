import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { DUserSignUpByEmail } from './user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async createUserByEmail(@Body() data: DUserSignUpByEmail) {
    return this.userService.signUpByEmail(data);
  }

  @Get(':id')
  async findUserByEmail(@Param('id') id: string) {
    return await this.userService.getUser(id);
  }
}
