import { Subjects, Publisher, OrderCancelledEvent } from '@sgticktes1/common';

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  subject: Subjects.OrderCancelled = Subjects.OrderCancelled;
}
