import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { UpdateStatusFailureEvent } from '../impl';

@EventsHandler(UpdateStatusFailureEvent)
export class UpdateStatusFailureHandler implements IEventHandler<UpdateStatusFailureEvent> {
  handle(event: UpdateStatusFailureEvent) {
    new Promise<void>((resolve) => {
      setTimeout(() => {
        console.log(
          `UpdateStatusfailHandler: ${new Date().toTimeString()}: Payment ${event.paymentId} status failed to update to ${event.status}`,
        );
        resolve();
      }, 5000);
    });
  }
}
