import { useSelector } from "react-redux";
import "./Header.scss";

const Header = () => {
  const { user, isAuth } = useSelector((state) => state.userData);

  return (
    <header className="header">
      <div className="header-left">
        <div className="logo">squadhelp</div>
      </div>

      <nav className="header-nav">
        <span>NAME IDEAS</span>
        <span>CONTESTS</span>
        <span>Our Work</span>
        <span>Names For Sale</span>
        <span>Blog</span>
      </nav>

      <div className="header-right">
        {isAuth && user ? (
          <div className="user-profile">
            <div className="avatar">👤</div>

            <span className="greeting">
              Hi, {user.firstName} {user.lastName}
            </span>
          </div>
        ) : (
          <span>Login</span>
        )}
        <button className="start-btn">START CONTEST</button>
      </div>
    </header>
  );
};

export default Header;
