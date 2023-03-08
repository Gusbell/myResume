import * as style from "../TailwindStyle.jsx";
import Thitiwat from "../icon/Thitiwat.png";

function Header() {
  const contactAlert = () => {
    alert("ยังไม่รู้ว่าจะใส่ link contact ให้มันไปไหน");
  };
  return (
    <header className={style.head}>
      <div className="mr-16">
        <div className="h-16"></div>
        <img src={Thitiwat} alt="Thitiwat Thijira" className="w-64"></img>
        <div className="h-16"></div>
      </div>
      <div className="relative top-24 mr-32">
        <p className="text-roseTaupe">Junior Software Developer</p>
        <h1 className="text-7xl">
          Thitiwat <br></br>Thijira
        </h1>
        <button className={style.contact} onClick={contactAlert}>
          CONTACT ME
        </button>
      </div>
    </header>
  );
}
export default Header;
