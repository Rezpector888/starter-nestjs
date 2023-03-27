import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { verify } from 'argon2';
import { PrismaService } from 'nestjs-prisma';
import { CreateUserDto } from '../users/dto/create-user.dto';
import { UsersService } from '../users/users.service';

@Injectable()
export class AuthService {
  constructor(private prismaService: PrismaService, private userService: UsersService) {

  }

  async register(body: CreateUserDto) {
    return await this.userService.create(body);
  }
  async validateUser(email: string, password: string) {
    const isExists = await this.userService.findOneForPayload(email)
    if (!isExists) throw new NotFoundException();
    const isValid = await verify(isExists.password, password);
    if (!isValid) throw new BadRequestException();
    return isExists;
  }
}
