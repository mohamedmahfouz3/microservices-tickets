import { Publisher, Subjects, TicketUpdatedEvent } from '@sgticktes1/common';

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
    
  readonly subject = Subjects.TicketUpdated;
}
