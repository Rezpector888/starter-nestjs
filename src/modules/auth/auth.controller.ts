import {
  Controller,
  Get,
  Post,
  Body,
  Req
} from '@nestjs/common';
import { Request } from 'express';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) { }

  @Post('login')
  async login(@Req() req: Request) {
    return req
  }
}
