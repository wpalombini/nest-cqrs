import { CommandHandler, EventBus, ICommandHandler } from '@nestjs/cqrs';
import { UpdateStatusCommand } from '../impl/update-status.command';
import { UpdateStatusSuccessfulEvent } from 'src/payments/events/impl/update-status-successful.event';

@CommandHandler(UpdateStatusCommand)
export class UpdateStatusCommandHandler implements ICommandHandler<UpdateStatusCommand> {
  constructor(private readonly eventBus: EventBus) {}

  async execute(command: UpdateStatusCommand) {
    // Update the status of the payment
    const response = await new Promise((resolve) => {
      setTimeout(() => {
        resolve('Status updated');
      }, 1000);
    });

    console.log(
      `UpdateStatusCommandHandler: ${new Date().toTimeString()}: Payment ${command.paymentId} status updated to ${command.status}`,
    );

    // Publish an event that the status was updated
    this.eventBus.publish(new UpdateStatusSuccessfulEvent(command.paymentId, command.status));

    return response;
  }
}
