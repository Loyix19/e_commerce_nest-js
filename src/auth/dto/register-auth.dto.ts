import {IsEmail, isEmail, IsNotEmpty,isNotEmpty, IsString, isString, Matches, MinLength, minLength} from 'class-validator';

export class RegisterAuthDto{

    @IsNotEmpty()
    @IsString()
    @Matches(/^[^0-9]*$/,{message: 'El nombre no puede contener numeros'})
    name:string;

    @IsNotEmpty()
    @IsString()
    @Matches(/^[^0-9]*$/,{message: 'El nombre no puede contener numeros'})
    lastname:string;

    @IsNotEmpty()
    @IsString()
    @IsEmail({},{message:'El email, no es valido'})
    email:string;

    @IsNotEmpty()
    @IsString()
    phone:string;

    @IsNotEmpty()
    @IsString()
    @MinLength(6,{message:"Minimo 6 caracteres"})
    password:string;
}