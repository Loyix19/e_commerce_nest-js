import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/users/users.entity';
import { Repository } from 'typeorm';
import { RegisterAuthDto } from './dto/register-auth.dto';
import { LoginAuthDto } from './dto/login-auth.dto';
import { compare } from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(
    @InjectRepository(User)
        private readonly usersRepository: Repository<User>,
        private readonly jwtService: JwtService,
    ) {}

    async register(user: RegisterAuthDto) {
        const { email, phone } = user;
        const emailExist = await this.usersRepository.findOneBy({ email });
        if (emailExist) {
            throw new HttpException('El email ya está registrado', HttpStatus.CONFLICT);
    }

    const phoneExist = await this.usersRepository.findOneBy({ phone });
    if (phoneExist) {
        throw new HttpException('El teléfono ya existe', HttpStatus.CONFLICT);
    }
    const newUser = this.usersRepository.create(user);
        return this.usersRepository.save(newUser);
    }

    async login(loginData: LoginAuthDto) {
        const { email, password } = loginData;
        const userFound = await this.usersRepository.findOneBy({ email });
        if (!userFound) {
            throw new HttpException('El email no existe', HttpStatus.NOT_FOUND);
    }
    const isPasswordValid = await compare(password, userFound.password);
    if (!isPasswordValid) {
        throw new HttpException('La contraseña es incorrecta', HttpStatus.FORBIDDEN);
    }
    const payload = { id: userFound.id, name: userFound.name };
    const token = this.jwtService.sign(payload);
    return {
            user: userFound,
            token,
        };
    }
}
