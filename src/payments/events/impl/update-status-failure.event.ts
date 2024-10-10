export class UpdateStatusFailureEvent {
  constructor(
    public readonly paymentId: string,
    public readonly status: string,
    public readonly error: Error,
  ) {}
}
