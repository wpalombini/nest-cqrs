import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { UpdateStatusSuccessfulEvent } from '../impl';

@EventsHandler(UpdateStatusSuccessfulEvent)
export class UpdateStatusSuccessfulEventHandler implements IEventHandler<UpdateStatusSuccessfulEvent> {
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
