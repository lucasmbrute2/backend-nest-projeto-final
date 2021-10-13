import { PartialType } from '@nestjs/mapped-types';
import { IsInt } from 'class-validator';
import { CreateProfileDto } from './create-profile.dto';

export class UpdateProfileDto extends PartialType(CreateProfileDto) { }
