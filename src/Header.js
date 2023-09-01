export default function Header() {
  return (
    <nav>
      <label htmlFor="check" className="checkbtn">
          <i className="fas fa-bars"></i>
      </label>
      <input type="checkbox" id="check" />
      <h1>mendio</h1>
      <div className="links">
        <ul>
          <li>product</li>
          <li>features</li>
          <li>pricing</li>
          <li>blog</li>
          <li className="active">sign up</li>
        </ul>
      </div>
    </nav>
  );
}
