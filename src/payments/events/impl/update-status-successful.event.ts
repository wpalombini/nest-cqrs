export class UpdateStatusSuccessfulEvent {
  constructor(
    public readonly paymentId: string,
    public readonly status: string,
  ) {}
}
