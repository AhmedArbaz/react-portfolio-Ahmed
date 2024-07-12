import logo from "../assets/kevinRushLogo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
const Navbar = () => {
  return (
    <nav className="px-6 mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img className="mx-2 w-10" src={logo} alt="logo" />
      </div>
      <div className="m-8 text-white flex items-center justify-center gap-4 text-2xl">
        <a href="https://www.linkedin.com/in/ahmad-hassan-76740a243?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
        <FaLinkedin />
        </a>
        <a href="https://github.com/AhmedArbaz">
        <FaGithub />
        </a>
        <a href="https://www.instagram.com/ah2797764?igsh=eGtjNzkwcHdxbXI1">

        <FaInstagram />
        </a>
        <a href="https://www.facebook.com/profile.php?id=100035652091000&mibextid=ZbWKwL">

        <FaFacebookSquare />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
