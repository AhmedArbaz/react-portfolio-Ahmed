import logo from "../assets/kevinRushLogo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
const Navbar = () => {
  return (
    <nav className="px-6 mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img className="mx-2 w-10" src={logo} alt="logo" />
      </div>
      <div className="m-8 text-white flex items-center justify-center gap-4 text-2xl">
        <FaLinkedin />
        <FaGithub />
        <FaInstagram />
        <FaTwitterSquare />
      </div>
    </nav>
  );
};

export default Navbar;
