function DropdownElement({ title, active }) {
  return (
    <li className={`navdropdown__element ${active && "active"}`}>
      <a href="/">{title}</a>
    </li>
  );
}

export { DropdownElement };
