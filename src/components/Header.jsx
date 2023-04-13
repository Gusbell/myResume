import * as style from "../TailwindStyle.jsx";
import Thitiwat from "../icon/Thitiwat.png";

function Header() {
  const contactMe = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <header className={style.head}>
      <div className="mr-16">
        <div className="h-16"></div>
        <img src={Thitiwat} alt="Thitiwat Thijira" className="w-64"></img>
        <div className="h-0 sm:h-16"></div>
      </div>
      <div className="relative top-0 sm:top-24 mr-32">
        <p className="text-roseTaupe">Junior Software Developer</p>
        <h1 className="text-7xl">
          Thitiwat <br></br>Thijira
        </h1>
        <button
          className={style.contact}
          onClick={(e) => contactMe(e, "contact")}
        >
          CONTACT ME
        </button>
      </div>
    </header>
  );
}
export default Header;
