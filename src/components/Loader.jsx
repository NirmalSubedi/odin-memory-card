import "../styles/Loader.css";

export function Loader({ text }) {
  return (
    <div className="loader">
      <div className="loader-icon"></div>
      <h2 className="loader-text">{text}</h2>
    </div>
  );
}
