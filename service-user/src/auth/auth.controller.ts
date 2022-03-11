import { Controller, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";

@Controller('auth')
export class AuthController{
    constructor(private authService: AuthService){}

    @Post('login')
    login(){
        return 'I am signed in'
    }

    @Post('logout')
    logout(){
        return 'I am signed out'
    }
}