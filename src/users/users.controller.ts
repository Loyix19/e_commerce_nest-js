import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { JwtAuthGuard } from 'src/auth/dto/jwt-auth.guard';

@Controller('users')
export class UsersController {
    constructor (private UsersService: UsersService){
    }
    // @Post()
    // create (@Body() user: CreateUserDto){
    //     return this.UserService.create(user);
    // }    @UseGuards(JwtAuthGuard)
    @Get() //http://localhost:3000/users
    findAll(){
        return this.UsersService.findAll();
    }
    @Post()
    create(@Body() user:CreateUserDto){
        return this.UsersService.create(user);
    }

}