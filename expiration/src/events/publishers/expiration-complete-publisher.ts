import {
  Subjects,
  Publisher,
  ExpirationCompleteEvent,
} from '@sgticktes1/common';

export class ExpirationCompletePublisher extends Publisher<ExpirationCompleteEvent> {
  subject: Subjects.ExpirationComplete = Subjects.ExpirationComplete;
}
