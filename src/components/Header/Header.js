import "./Header.css";
import SimpleBottomNavigation from "./MainNav"
const Header = () => {
  return (
    <div className="container" onClick={() => window.scroll(0, 0)}>
      <span  className="header">
      🎬 Entertainment Hub 🎥
      
      </span>
    <SimpleBottomNavigation ></SimpleBottomNavigation>
    </div>
  );
};

export default Header;
