import { Publisher, Subjects, TicketCreatedEvent } from '@sgticktes1/common';

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  readonly subject = Subjects.TicketCreated;
}
