import logo from "./images/aeguana-logo-dark-may21.svg";

const Header = () => {
  return (
    <>
      <header>
        <div className="header-container">
          <img src={logo} alt="logo_aeguana" />
        </div>
      </header>
    </>
  );
};

export default Header;
