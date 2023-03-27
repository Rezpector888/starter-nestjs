import {
  Controller,
  Get,
  Post,
  Body,
  Req
} from '@nestjs/common';
import { UseGuards } from '@nestjs/common/decorators/core/use-guards.decorator';
import { HttpCode } from '@nestjs/common/decorators/http/http-code.decorator';
import { Request } from 'express';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './guard/local.guard';
import { CreateUserDto } from '../users/dto/create-user.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) { }

  @UseGuards(LocalAuthGuard)
  @HttpCode(200)
  @Post('login')
  async login(@Req() req: Request) {
    return await this.authService.login(req.body)
  }

  @HttpCode(200)
  @Post('register')
  async register(@Body() body: CreateUserDto) {
    return await this.authService.register(body);
  }
}
