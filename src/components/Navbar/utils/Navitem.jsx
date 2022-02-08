function Navitem({ title, active }) {
  return (
    <li className={`Navbar__navitem ${active && "active"}`}>
      <a href="/" className="Navbar__navlink">
        {title}
      </a>
    </li>
  );
}

export { Navitem };
