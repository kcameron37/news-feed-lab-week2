import React from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

function App() {
  return (
    <div className="Feed">
      <NewsFeed>
        <Title
          image="https://static.vecteezy.com/system/resources/thumbnails/002/058/031/small/picture-icon-photo-symbol-illustration-for-web-and-mobil-app-on-grey-background-free-vector.jpg"
          name="Tesla Shanghai Capacity Will Exceed 1 Million Cars In 2022, BYD Blade Batteries Coming"
          link="https://cleantechnica.com/2022/02/14/tesla-shanghai-capacity-will-exceed-1-million-cars-in-2022-byd-blade-batteries-coming/"
          author="Steve Hanley"
          text="Tesla's Giga Shanghai is expanding and will soon be able to manufacture more than 1 million cars a year."
        />

        <Title
          image="https://static.vecteezy.com/system/resources/thumbnails/002/058/031/small/picture-icon-photo-symbol-illustration-for-web-and-mobil-app-on-grey-background-free-vector.jpg"
          name="Tesla recall for heater and defroster systems issued by Transport Canada"
          link="https://www.teslarati.com/tesla-recall-heater-defroster-system-transport-canada/"
          author="Maria Merano"
          text="Transport Canada issued a recall for the Tesla Model 3, Model Y, and Model S on February 3, 2022, the agency told Teslarati recently. The recall was issued after the agency discovered an issue with the heat system in certain Tesla vehicles.  Transport Canada reported that a little over 2,084 Tesla vehicles were affected by the recall. "
        />

        <Title
          image="https://static.vecteezy.com/system/resources/thumbnails/002/058/031/small/picture-icon-photo-symbol-illustration-for-web-and-mobil-app-on-grey-background-free-vector.jpg"
          name="Tesla Model Y = Top Selling SUV in California in 2021"
          link="https://cleantechnica.com/2022/02/13/tesla-model-y-top-selling-suv-in-california-in-2021/"
          author="Zachary Shahan"
          text="It’s hard to believe, even as someone who has been placed firmly on the Tesla bull list for a decade, but the Tesla Model Y ended 2021 as the top selling SUV or truck in California! That is across all types of SUVs and trucks. The Model Y outsold the #2 Toyota RAV4, a much […]"
        />
      </NewsFeed>
    </div>
  );
}

function NewsFeed(props) {
  return (
    <div className="theFeed">
      <h1>My News Feed </h1>
      <h3> Kaitlyn Cameron - Set H </h3>
      <ul className="feed">{props.children}</ul>
    </div>
  );
}

function Title(props) {
  return (
    <li>
      <div className="title-container">
        <img src={props.image} />
        <div className="title-content">
          <h2>
            <a href={props.link}>{props.name}</a>
          </h2>
          <p>{props.text}</p>
          <p>Author: {props.author}</p>
        </div>
      </div>
    </li>
  );
}

const root = createRoot(document.getElementById("root"));
root.render(<App />);
