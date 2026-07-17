import "../styles/Notice.css";

export function Notice({ subject = "", message = "", isVisible }) {
  return (
    <div className="notice-container">
      <section
        className={`notice${isVisible ? "" : " sr-only"}`}
        aria-live="polite"
      >
        <h2>{isVisible && subject}</h2>
        <p className="hint">{isVisible && message}</p>
      </section>
    </div>
  );
}
