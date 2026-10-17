export default function Navbar() {
  return (
    <header className="site-header" id="top">
      <a className="wordmark" href="#top" aria-label="Mithhu, home">
        mithhu<span className="accent">.</span>
      </a>
      <nav aria-label="Main navigation">
        <a href="#projects">Work</a>
        <a href="#experience">Experience</a>
        <a href="#about">About</a>
        <a href="#contact" className="nav-contact">
          Let’s talk <span aria-hidden="true">↗</span>
        </a>
      </nav>
    </header>
  );
}
