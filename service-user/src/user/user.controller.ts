import { Controller, Get, Post } from "@nestjs/common";
import { UserService } from "./user.service";

@Controller('user')
export class UserController{
    constructor(private userService: UserService){}

    @Get('list')
    list(){
        return 'This action for returns all users.'
    }

    @Post('create')
    create(){
        return 'This action for add new user'
    }

    @Post('update')
    update(){
        return 'This action for update existing user'
    }
}