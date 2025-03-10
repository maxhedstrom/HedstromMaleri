import "../styles/footer.css";

function Footer() {
  return (
    <section className="footer">
      <div className="socialmedia">
        <a href="#"><i className="fab fa-instagram"></i></a>
        <a href="#"><i className="fab fa-snapchat"></i></a>
        <a href="#"><i className="fab fa-x"></i></a>
        <a href="#"><i className="fab fa-facebook"></i></a>
      </div>
      <ul className="list">
        <li><a href="/">Hem</a></li>
        <li><a href="/om">Om oss</a></li>
        <li><a href="/tjanster">Tjänster</a></li>
        <li><a href="/projekt">Våra projekt</a></li>
        <li><a href="/rot">ROT-Avdrag</a></li>
        <li><a href="/kontakt">Kontakta oss</a></li>
      </ul>
      <p className="copyright">Max Hedström © 2025</p>
    </section>
  );
}

export default Footer;
