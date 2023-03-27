import { BadRequestException, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
    handleRequest<TUser = any>(err: any, user: any, info: any, context: ExecutionContext, status?: any): TUser {
        if (err || !user) {
            if (info.message === 'jwt expired') {
                throw new UnauthorizedException('Bearer Token Expired');
            } else if (info.message === 'invalid signature') {
                throw new UnauthorizedException('Invalid Token');
            }
            throw err || new BadRequestException(info.message);
        }
        return user;
    }
}
