import { PartialType } from '@nestjs/mapped-types';
import { IsArray, IsInt, IsOptional } from 'class-validator';
import { CreateProfileDto } from './create-profile.dto';

export class UpdateProfileDto extends PartialType(CreateProfileDto) {
    @IsInt({ each: true })
    @IsArray()
    @IsOptional()
    games?: number[]

    @IsInt({ each: true })
    @IsArray()
    @IsOptional()
    deletedGames: number[]
}
