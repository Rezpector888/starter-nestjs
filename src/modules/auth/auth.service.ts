import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { verify } from 'argon2';
import { PrismaService } from 'nestjs-prisma';
import { JwtInterface } from 'src/common/config/config-interface';
import { CreateUserDto } from '../users/dto/create-user.dto';
import { UsersService } from '../users/users.service';
import { LoginDto } from './dto/login.dto';

@Injectable()
export class AuthService {
  constructor(private prismaService: PrismaService, private userService: UsersService, private jwtService: JwtService, private configService: ConfigService) {

  }

  private async _HashJwt(payload: any) {
    const access = this.jwtService.sign(payload, { secret: this.configService.get<JwtInterface>('jwt').accessSecret, expiresIn: this.configService.get<JwtInterface>('jwt').accessExpire })
    const refresh = this.jwtService.sign({ ...payload.email }, { secret: this.configService.get<JwtInterface>('jwt').refreshSecret, expiresIn: this.configService.get<JwtInterface>('jwt').refreshExpire })
    return {
      access, refresh
    }
  }

  async login(body: LoginDto) {
    const data = await this.userService.findOneForPayload(body.email);
    return this._HashJwt(data)
  }

  async register(body: CreateUserDto) {
    return await this.userService.create(body);
  }

  async validateUser(email: string, password: string) {
    const isExists = await this.userService.findOneForValidate(email)
    if (!isExists) throw new NotFoundException();
    const isValid = await verify(isExists.password, password);
    if (!isValid) throw new BadRequestException();
    return isExists;
  }
}
