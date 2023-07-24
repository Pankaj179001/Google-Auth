import { Injectable } from '@nestjs/common';
import { Request } from 'express';

@Injectable()
export class AuthService {
  async googleLogin(req: Request) {
    console.log({ user: req.user }, 'fsnffjsf');
    if (!req.user) {
      return 'No user from google';
    }

    return {
      message: 'Auth completed',
      user: req.user,
    };
  }
}
