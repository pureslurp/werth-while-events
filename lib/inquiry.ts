import { eventTypes, places } from "@/lib/content";

export type InquiryInput = {
  name: string;
  email: string;
  eventType: string;
  date: string;
  where: string;
  message: string;
  faxNumber: string;
};

export type FieldName = "name" | "email" | "eventType" | "date" | "where" | "message";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateInquiry(input: InquiryInput): Partial<Record<FieldName, string>> {
  const errors: Partial<Record<FieldName, string>> = {};
  const name = input.name.trim();
  const email = input.email.trim();
  const message = input.message.trim();
  const date = input.date.trim();

  if (!name) errors.name = "Enter your name.";
  else if (name.length > 200) errors.name = "Use a shorter name.";

  if (!email || !emailPattern.test(email)) {
    errors.email = "Enter an email so we can reply.";
  }

  if (!eventTypes.includes(input.eventType as (typeof eventTypes)[number])) {
    errors.eventType = "Choose an event type.";
  }

  if (date.length > 80) errors.date = "Use a shorter date.";

  if (!places.includes(input.where as (typeof places)[number])) {
    errors.where = "Choose where the event is.";
  }

  if (!message) errors.message = "Tell us what you need help with.";
  else if (message.length > 5000) {
    errors.message = "Shorten that note and send the rest by email.";
  }

  return errors;
}
