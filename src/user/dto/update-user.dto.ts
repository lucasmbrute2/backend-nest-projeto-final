import { PartialType } from '@nestjs/mapped-types';
import { Type } from 'class-transformer';
import { ValidateNested, IsOptional, IsArray } from 'class-validator';
import { CreateProfileDto } from 'src/profile/dto/create-profile.dto';
import { CreateUserDto } from './create-user.dto';

export class UpdateUserDto extends PartialType(CreateUserDto) {

    @ValidateNested({ each: true })
    @IsOptional()
    @Type(() => CreateProfileDto)
    @IsArray()
    profile?: CreateProfileDto[];
}
