export class UpdateStatusCommand {
  constructor(
    public readonly paymentId: string,
    public readonly status: string,
  ) {}
}
