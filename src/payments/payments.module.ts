import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { PaymentsController } from './payments.controller';
import { GetStatusQueryHandler } from './queries/handlers/get-status.handler';
import { UpdateStatusCommandHandler } from './commands/handlers/update-status.handler';
import { UpdateStatusSuccessfulHandler } from './events/handlers/update-status-success.handler';

@Module({
  imports: [CqrsModule],
  controllers: [PaymentsController],
  providers: [GetStatusQueryHandler, UpdateStatusCommandHandler, UpdateStatusSuccessfulHandler],
})
export class PaymentsModule {}
