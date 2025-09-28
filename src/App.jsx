import "./App.css";
import { useState } from "react";
import Birthday from "./Birthday";
const boddies = [
  {
    img: "person-1.jpeg",
    firstName: "Bertie",
    lastName: "Yates",
    years: 29,
    id: 1,
  },
  {
    img: "person-2.jpeg",
    firstName: "Hester",
    lastName: "Hogan",
    years: 32,
    id: 2,
  },
  {
    img: "person-3.jpeg",
    firstName: "Larry",
    lastName: "Little",
    years: 36,
    id: 3,
  },
  {
    img: "person-4.jpeg",
    firstName: "Sean",
    lastName: "Walsh",
    years: 34,
    id: 4,
  },
  {
    img: "person-5.jpeg",
    firstName: "Lola",
    lastName: "Gardner",
    years: 29,
    id: 5,
  },
];
function BirthdayBuddyApp() {
  const [friends, setFriends] = useState(boddies);
  const clearAll = () => {
    setFriends([]);
  };
  const deleteFriend = (id) => {
    //setFriends(friends.filter((friend) => friend.id !== id));
    setFriends((prev) => {
      return prev.filter((friend) => friend.id !== id);
    });
  };
  //prev-znaci da se uzima proslo stanje array, bolje je od koriscenja friends array-a
  return (
    <div className="App">
      <h1 className="h1">
        <span>{friends.length}</span> Birthdays Today
      </h1>
      <ul className="list_box">
        {friends.map((friend) => {
          //const { img, firstName, lastName, years, id } = friend;
          return (
            <Birthday key={friend.id} {...friend} onDelete={deleteFriend} />
          );
        })}
      </ul>
      <button className="btn" onClick={clearAll}>
        Clear All
      </button>
    </div>
  );
}

export default BirthdayBuddyApp;
