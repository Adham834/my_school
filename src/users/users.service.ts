import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UsersService {
  constructor(private prismaService: PrismaService) {}

  async signUp(name, email, password) {
    const user = await this.prismaService.user.create({
      data: {
        name,
        email,
        password,
      },
    });

    return user;
  }

  async signIn(email, password) {
    const [user] = await this.prismaService.user.findMany({
      where: {
        email,
      },
    });

    if (password === user.password) {
      return user;
    }
  }

  async whoami(id: number) {
    return await this.prismaService.user.findUnique({ where: { id } });
  }

  async findOne(id: number) {
    return await this.prismaService.user.findUnique({ where: { id } });
  }

  async findAll(name: string) {
    return await this.prismaService.user.findMany({ where: { name } });
  }
}
