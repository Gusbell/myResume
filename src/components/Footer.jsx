import * as style from "../TailwindStyle.jsx";
import LinkedIn from "../icon/LinkedIn.png";
import fb from "../icon/fb.png";
import ig from "../icon/ig.png";
import github from "../icon/github.png";

function Footer() {
  return (
    <footer id="contact" className={style.foot}>
      <h2 className={style.footH2}>Get in touch!</h2>
      <h3>ghostridergusze@gmail.com | 084-118-0888</h3>
      <div className={style.icon}>
        <a href="https://www.facebook.com/GhostRiderGusZe/" target="blank">
          <img src={fb} alt="facebook" className="w-5"></img>
        </a>
        <a href="https://www.instagram.com/ghostridergusze/?igshid=YmMyMTA2M2Y%3D" target="blank">
          <img src={ig} alt="instagram" className="w-5"></img>
        </a>
        <a href="https://th.linkedin.com/" target="blank">
          <img src={LinkedIn} alt="link in" className="w-5"></img>
        </a>
        <a href="https://github.com/Gusbell" target="blank">
          <img src={github} alt="github" className="w-5"></img>
        </a>
      </div>
    </footer>
  );
}
export default Footer;
