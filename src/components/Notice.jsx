import "../styles/Notice.css";

export function Notice({ subject = "", message = "", isVisible }) {
  return (
    <div className="notice-container" aria-hidden={!isVisible}>
      <section className={`notice${isVisible ? "" : " sr-only"}`}>
        <h2 aria-live="polite">{isVisible && subject}</h2>
        <p className="hint" aria-live="polite">
          {isVisible && message}
        </p>
      </section>
    </div>
  );
}
