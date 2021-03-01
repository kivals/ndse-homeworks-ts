import {
  IsString,
  IsBoolean,
  IsNumber,
  Length,
  IsPositive,
  IsOptional,
} from 'class-validator';

class CreateBookDto {
  @IsString()
  @Length(3, 30)
  public title: string;

  @IsString()
  public authors: string;

  @IsString()
  @IsOptional()
  public description: string;

  @IsBoolean()
  @IsOptional()
  public favorite: string;

  @IsString()
  @IsOptional()
  public fileCover: string;

  @IsString()
  @IsOptional()
  public fileName: string;

  @IsString()
  @IsOptional()
  public fileBook: string;

  @IsNumber()
  @IsPositive()
  @IsOptional()
  public views: number;
}

export default CreateBookDto;
