import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { GetStatusQuery } from '../impl/get-status.query';

@QueryHandler(GetStatusQuery)
export class GetStatusQueryHandler implements IQueryHandler<GetStatusQuery> {
  async execute(query: GetStatusQuery) {
    console.log(query);
    return query.paymentId;
  }
}
