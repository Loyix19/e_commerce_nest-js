import { Body, Controller, Get, Param, ParseIntPipe, Post, UseGuards } from '@nestjs/common';
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
    @Get(':id')//? http://localhost:3000/users/1..2..3
    findById(@Param('id', ParseIntPipe)id:number){
        return this.UsersService.findAll_id(id);
    }
    

}