import { CommandHandler, EventBus, ICommandHandler } from '@nestjs/cqrs';
import { UpdateStatusCommand } from '../impl/update-status.command';
import { UpdateStatusSuccessfulEvent, UpdateStatusFailureEvent } from 'src/payments/events/impl';

@CommandHandler(UpdateStatusCommand)
export class UpdateStatusCommandHandler implements ICommandHandler<UpdateStatusCommand> {
  constructor(private readonly eventBus: EventBus) {}

  async execute(command: UpdateStatusCommand) {
    try {
      // Update the status of the payment
      const response = await new Promise((resolve /*, reject */) => {
        setTimeout(() => {
          resolve('Status updated');
          // reject('Error updating status');
        }, 1000);
      });

      console.log(
        `UpdateStatusCommandHandler: ${new Date().toTimeString()}: Payment ${command.paymentId} status updated to ${command.status}`,
      );

      // Publish an event that the status was updated
      this.eventBus.publish(new UpdateStatusSuccessfulEvent(command.paymentId, command.status));

      return response;
    } catch (error) {
      console.error(
        `UpdateStatusCommandHandler: ${new Date().toTimeString()}: Error updating status of payment ${command.paymentId}`,
      );

      // Publish an event that the status was not updated
      this.eventBus.publish(new UpdateStatusFailureEvent(command.paymentId, command.status, error));

      throw error;
    }
  }
}
