const EVENTS_URL = "./api/events.json";

export const getEvents = async () => {
  const events = await fetch(EVENTS_URL);
  const preparedEvents = await events.json();

  return preparedEvents;
}