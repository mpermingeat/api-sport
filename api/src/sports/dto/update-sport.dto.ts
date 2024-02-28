import { PartialType } from '@nestjs/mapped-types'
import { CreateSportDto } from './create-sport.dto'

export class UpdateSportDto extends PartialType(CreateSportDto) {
  name: string
  type: string
  description: string
}
