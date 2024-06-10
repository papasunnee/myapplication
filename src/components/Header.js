import "./Header.css";

function Header({ text, moreInfo }) {
  const showButton = true;
  return (
    <header className="header_banner">
      <div className="header">
        <h1 className="header__h1">{text}</h1>
        <p>{moreInfo.subText}</p>

        {showButton ? (
          <button onClick={(e) => moreInfo.buttonClick("Jude", e)}>
            {moreInfo.ctaText}
          </button>
        ) : (
          ""
        )}
      </div>
    </header>
  );
}

export default Header;
