import React from "react";
const Birthday = (friends) => {
  const { src, firstName, lastName, years } = friends;
  return (
    <li className="list">
      <img className="img" src={src} />
      <div className="info-box">
        <h3>
          {firstName} {lastName}
        </h3>
        <p>
          <span>{years}</span> years
        </p>
      </div>
    </li>
  );
};
export default Birthday;
