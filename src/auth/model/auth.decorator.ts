import { SetMetadata } from "@nestjs/common";

export const IS_PLUBIC_KEY = 'isPlubic'
export const Public = () => SetMetadata(IS_PLUBIC_KEY, true)