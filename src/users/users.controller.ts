import { Body, Controller, Get, Post, Session } from '@nestjs/common';
import { signUpDto } from './dtos/signUp.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Post('/signup')
  async signup(@Body() body: signUpDto, @Session() session: any) {
    const user = await this.usersService.signUp(
      body.name,
      body.email,
      body.password,
    );
    session.userId = user.id;
    console.log(session);
    return user;
  }

  @Get('/signin')
  async signIn(@Body() body: Partial<signUpDto>, @Session() session: any) {
    const user = await this.usersService.signIn(body.email, body.password);
    console.log(session);
    return user;
  }

  @Post('signout')
  signout(@Session() session: any) {
    session.userId = null;
  }

  @Get('/whoami')
  async whoami(@Session() session: any) {
    return this.usersService.whoami(session.userId);
  }
}
