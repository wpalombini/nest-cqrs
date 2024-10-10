import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { UpdateStatusSuccessfulEvent } from '../impl/update-status-successful.event';

@EventsHandler(UpdateStatusSuccessfulEvent)
export class UpdateStatusSuccessfulHandler implements IEventHandler<UpdateStatusSuccessfulEvent> {
  handle(event: UpdateStatusSuccessfulEvent) {
    new Promise<void>((resolve) => {
      setTimeout(() => {
        console.log(
          `UpdateStatusSuccessfulHandler: ${new Date().toTimeString()}: Payment ${event.paymentId} status updated successfully to ${event.status}`,
        );
        resolve();
      }, 5000);
    });
  }
}
