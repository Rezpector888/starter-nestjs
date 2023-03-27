import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { PassportStrategy } from "@nestjs/passport";
import { Request } from "express";
import { ExtractJwt, Strategy } from "passport-jwt";
import { JwtInterface } from "src/common/config/config-interface";

@Injectable()
export class RefreshStrategy extends PassportStrategy(Strategy, 'refresh') {
    constructor(private config: ConfigService) {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: config.get<JwtInterface>('jwt').refreshSecret,
            ignoreExpiration: false,
            passReqToCallback: true,
        })
    }
    async validate(req: Request, payload: any) {
        const refresh = req.get('Authorization').replace('Bearer', '').trim();
        delete payload.refreshToken;
        return { ...payload, refresh }
    }
}