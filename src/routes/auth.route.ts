import { Router } from 'express';
import AuthController from '@controllers/auth.controller';
import { Routes } from '@interfaces/routes.interface';
import firebaseAuthMiddleware from '@middlewares/auth.middleware';

class AuthRoute implements Routes {
  public path = '/';
  public router = Router();
  public authController = new AuthController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.post(`${this.path}login`, firebaseAuthMiddleware, this.authController.login);
    this.router.get(`${this.path}me`, firebaseAuthMiddleware, this.authController.getuserProfile);
  }
}

export default AuthRoute;
