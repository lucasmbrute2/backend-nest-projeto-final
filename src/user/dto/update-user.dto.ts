import { PartialType } from '@nestjs/mapped-types';
import { Type } from 'class-transformer';
import { IsArray, IsInt, IsOptional, ValidateNested } from 'class-validator';
import { UpdateProfileDto } from 'src/profile/dto/update-profile.dto';
import { CreateUserDto } from './create-user.dto';

export class UpdateUserDto extends PartialType(CreateUserDto) {

    @ValidateNested({ each: true })
    @IsOptional()
    @Type(() => UpdateProfileDto)
    @IsArray()
    profile?: UpdateProfileDto[];
}
