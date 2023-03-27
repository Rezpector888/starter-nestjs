import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from 'nestjs-prisma';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { hash } from 'argon2';

@Injectable()
export class UsersService {
  constructor(private prismaService: PrismaService) {

  }
  private logger: Logger;

  async findOneForPayload(email: string) {
    return await this.prismaService.user.findFirst({
      where: {
        email,
        deletedAt: null
      }
    })
  }

  async create(createUserDto: CreateUserDto) {
    const password = await hash(createUserDto.password)
    return await this.prismaService.user.create({
      data: {
        ...createUserDto,
        password
      }
    })
  }

  async findAll() {
    return await this.prismaService.user.findMany({
      where: { deletedAt: null }
    })
  }

  async findOne(id: string) {
    return await this.prismaService.user.findUnique({ where: { id } });
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
