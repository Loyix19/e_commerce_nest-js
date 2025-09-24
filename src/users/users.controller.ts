import { Body, Controller, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('Users')
export class UsersController {
    constructor (private UserService: UsersService){
    }
    @Post()
    create (@Body() user: CreateUserDto){
        return this.UserService.create(user);
    }
}