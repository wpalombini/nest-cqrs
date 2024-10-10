import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { GetStatusQuery } from './queries/impl/get-status.query';
import { UpdateStatusDto } from './dtos/update-status.dto';
import { UpdateStatusCommand } from './commands/impl/update-status.command';

@Controller('payments')
export class PaymentsController {
  constructor(
    private readonly commandBus: CommandBus,
    private readonly queryBus: QueryBus,
  ) {}

  @Get('status/:id')
  async getStatus(@Param('id') id: string): Promise<string> {
    return this.queryBus.execute(new GetStatusQuery(id));
  }

  @Post('status/:id')
  async updateStatus(
    @Param('id') id: string,
    @Body() dto: UpdateStatusDto,
  ): Promise<string> {
    return await this.commandBus.execute(
      new UpdateStatusCommand(id, dto.status),
    );
  }
}
