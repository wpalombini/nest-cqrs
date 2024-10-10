import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { UpdateStatusCommand } from '../impl/update-status.command';

@CommandHandler(UpdateStatusCommand)
export class UpdateStatusCommandHandler
  implements ICommandHandler<UpdateStatusCommand>
{
  async execute(command: UpdateStatusCommand) {
    const result = await new Promise((resolve) => {
      setTimeout(() => {
        resolve(
          `Status of payment ${command.paymentId} updated to ${command.status}`,
        );
      }, 1000);
    });

    console.log(result);

    return result;
  }
}
