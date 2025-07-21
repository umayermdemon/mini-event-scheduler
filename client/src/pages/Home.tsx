import ArchivedEvents from "../components/ArchivedEvents";
import EventForm from "../components/EventForm";
import MyEvents from "../components/MyEvents";

const Home = ({ view }: { view: string }) => {
  return (
    <div className="p-4 min-h-[calc(100vh-150px)] max-w-7xl mx-auto w-full">
      <div className="w-full flex flex-col">
        {view === "add-event" ? (
          <EventForm />
        ) : view === "my-events" ? (
          <MyEvents />
        ) : (
          <ArchivedEvents />
        )}
      </div>
    </div>
  );
};

export default Home;
