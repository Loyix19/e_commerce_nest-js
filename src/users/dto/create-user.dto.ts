export class CreateUserDto {
    //DTO= Data Transfer Object
    name:string;
    lastname:string;
    email:string;
    phone:string;
    password:string;
    image?:string;
    notificacion_token?:string;
}