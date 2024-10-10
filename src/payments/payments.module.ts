import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { PaymentsController } from './payments.controller';
import { GetStatusQueryHandler } from './queries/handlers/get-status.handler';
import { UpdateStatusCommandHandler } from './commands/handlers/update-status.handler';
import { UpdateStatusFailureHandler, UpdateStatusSuccessfulEventHandler } from './events/handlers';

@Module({
  imports: [CqrsModule],
  controllers: [PaymentsController],
  providers: [
    GetStatusQueryHandler,
    UpdateStatusCommandHandler,
    UpdateStatusSuccessfulEventHandler,
    UpdateStatusFailureHandler,
  ],
})
export class PaymentsModule {}
