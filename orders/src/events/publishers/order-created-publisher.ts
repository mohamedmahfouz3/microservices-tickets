import { Publisher, OrderCreatedEvent, Subjects } from '@sgticktes1/common';

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  subject: Subjects.OrderCreated = Subjects.OrderCreated;
}
