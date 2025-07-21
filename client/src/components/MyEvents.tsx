import EventList from "./EventList";

const MyEvents = () => {
  return (
    <div>
      <h1 className="text-2xl sm:text-3xl font-bold mb-8 text-center sm:text-left">
        My Events
      </h1>
      <EventList isArchived={false} />
    </div>
  );
};

export default MyEvents;
