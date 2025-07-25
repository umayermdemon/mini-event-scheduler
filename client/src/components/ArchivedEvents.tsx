import EventList from "./EventList";

const ArchivedEvents = () => {
  return (
    <div>
      <h1 className="text-2xl sm:text-3xl font-bold mb-8 text-center sm:text-left">
        Archived Events
      </h1>
      <EventList isArchived={true} />
    </div>
  );
};

export default ArchivedEvents;
