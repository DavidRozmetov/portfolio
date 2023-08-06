import { FaReact } from "react-icons/fa";
export const CoderText = () => {
  return (
    <h1 style={{ width: "max-content" }}>
      <span style={{ color: "#61dbfb" }}>{"</"}</span>
      <span>{"c"}</span>
      <span style={{ color: "#61dbfb", fontSize: "0.7em", display: "inline" }}>
        <FaReact />
      </span>
      <span>{"der"}</span>
      <span style={{ color: "#61dbfb" }}>{">"}</span>
    </h1>
  );
};
