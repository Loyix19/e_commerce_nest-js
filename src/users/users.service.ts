import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './users.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User) private usersRespository:Repository<User>
    ){}
    create (user:CreateUserDto){
        const newUser=this.usersRespository.create(user);
        return this.usersRespository.save(newUser);
    }
}
