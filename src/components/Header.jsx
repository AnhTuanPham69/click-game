import "../App.css";

function Header() {
  return (
    <div className="header-wrapper">
      <h1 className="title">LET&apos;S PLAY</h1>
      <div className="point-wrapper">
        <span className="label">Points</span>
        <input className="point-input" value={10} />
      </div>
      <div className="time-wrapper">
        <span className="label">Time</span>
        <span className="time-duration">8.1s</span>
      </div>
      <button className="action-button">Play</button>
    </div>
  );
}

export default Header;
