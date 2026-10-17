export default function Contact() {
  return (
    <footer id="contact" className="contact-section">
      <div className="shell">
        <span className="eyebrow">Good work starts with a conversation.</span>
        <h2>
          Let’s make
          <br />
          <em>something useful.</em>
        </h2>
        <a className="contact-email" href="mailto:mithhu121212@gmail.com">
          mithhu121212@gmail.com <span aria-hidden="true">↗</span>
        </a>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Mahamudul Hasan Mithhu</span>
          <div>
            <a href="/resume">Career overview ↗</a>
            <a href="#top">Back to top ↑</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
