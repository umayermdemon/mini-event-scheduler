import ArchivedEvents from "../components/ArchivedEvents";
import EventForm from "../components/EventForm";
import EventList from "../components/EventList";

const Home = ({ view }: { view: string }) => {
  return (
    <div className="p-4 min-h-[calc(100vh-150px)] max-w-7xl mx-auto">
      {view === "add-event" ? (
        <EventForm />
      ) : view === "my-events" ? (
        <EventList />
      ) : (
        <ArchivedEvents />
      )}
    </div>
  );
};

export default Home;
