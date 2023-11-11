// components/Header.js
import { ModeToggle } from "./ThemeButton";


const Header = () => {
  return (
    <div className="flex justify-end p-4">
      <ModeToggle />
    </div>
  );
};

export default Header;
