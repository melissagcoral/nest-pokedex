import { IsPositive, IsString, MinLength, Min, IsInt } from "class-validator";

export class CreatePokemonDto {

    // isInt, isPositive, min 1
    @IsPositive()
    @IsInt()
    @Min(1)
    no: number;

    // isString, minLenght 1
    @IsString()
    @MinLength(1)
    name: string; 
}
