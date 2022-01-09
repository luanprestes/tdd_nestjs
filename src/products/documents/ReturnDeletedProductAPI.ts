import { ApiProperty } from '@nestjs/swagger';

export class ReturnDeletedProductAPI {
  @ApiProperty()
  deleted: boolean;
}
