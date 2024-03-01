import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement("div", { class: "title" }, [
  React.createElement("h1", {}, "h1 here"),
  React.createElement("h2", {}, "h2 here"),
  React.createElement("h3", {}, "h3 here"),
]);

const header = (
  <div className="title">
    <h1>Hi,hello H! hereeee</h1>
    <h2>Hi,hello H2 here </h2>
    <h3>Hi,hello H3 here</h3>
  </div>
);

const Header = () => {
  return (
    <div className="title">
      <h1>Hi,hello H! here</h1>
      <h2>Hi,hello H2 here </h2>
      <h3>Hi,hello H3 here</h3>
    </div>
  );
};

const HeadingComponent = () => {
  return (
    <>
      <h1>Hello Akash</h1>
      <h2>Learning react</h2>
      {header}
    </>
  );
};
const HeaderComponent = () => {
    return (
      <div className="header">
        <img src="https://cdn.mos.cms.futurecdn.net/JYMtGzLr6f2RGuHkaxJjwD-650-80.jpg.webp" alt="logo" className="img"/>
        <input type="text" placeholder="Search for ..."/>
        <img src="https://example.com/path-to-your-user-icon.png" alt="User Icon" className="user-icon"/>
      </div>
    );
  };
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeaderComponent/>);
