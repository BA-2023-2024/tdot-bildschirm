import { faScrewdriverWrench } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function PostenUebersicht() {
  const posten = [
    {
      room: "BA-Raum",
      post: "Frontend, M5",
    },
    {
      room: "PiBS-Raum",
      post: "Typing, UseLessUI",
    },
    {
      room: "Medienraum",
      post: "Quizziz, Kahoot, Photobox, PC zerlegen",
    },
    {
      room: "BA-Raum",
      post: "Frontend, M5",
    },
    {
      room: "Labor",
      post: "FehlerVMs, Kabel erstellen, WireShark",
    },
    {
      room: "Bistro",
      post: "Bar",
    },
    {
      room: "Lounge",
      post: "Food",
    },
  ];

  return (
    <div className="card mt-5 h-full">
      <div className="flex flex-row justify-start items-center w-[calc(100%-84px)]">
        <FontAwesomeIcon
          className="text-primary text-5xl ms-8"
          icon={faScrewdriverWrench}
        />{" "}
        <h1 className="title pt-1.5 mx-auto">Posten</h1>
      </div>
      <hr className="divider" />
      <div className="grid-container mt-3">
        {posten.map((post, index) => (
          <React.Fragment key={index}>
            <div className="title text-primary text-2xl">{post.room}</div>
            <div className="text font-medium">{post.post}</div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
