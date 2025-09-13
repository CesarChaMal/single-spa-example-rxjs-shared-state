import React from "react";

export default function Root(props) {
  return (
    <section style={{ textAlign: "center", padding: "1rem", position: "relative" }}>
      <div style={{
        position: "absolute",
        top: "5px",
        left: "10px",
        fontSize: "0.75rem",
        opacity: 0.7,
        background: "rgba(0, 0, 0, 0.1)",
        padding: "2px 6px",
        borderRadius: "3px"
      }}>
        Home • React
      </div>
      {props.name} is mounted!
    </section>
  );
}
