import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt'; 

@Injectable()
export class AuthService {
  constructor(private readonly jwtService: JwtService) {}

  // verify token
  async verifyToken(token: string): Promise<any> {

    try {
      return this.jwtService.verify(token);
    } catch (error) {
      throw new UnauthorizedException('Invalid token');
    }
  }
}
