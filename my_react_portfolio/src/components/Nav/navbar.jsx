import { Link, useLocation } from 'react-router-dom';

function Nav() {
  const pages = ['portfolio', 'contact', 'resume'];
  const currentPage = useLocation().pathname;
  return (
    <nav>
      <ul className="flex-row">
        <li
          className={`mx-5 ${currentPage === '/' && 'navActive'}`}
          key="about"
        >
          <Link to="/">About</Link>
        </li>
        {pages.map((Page) => (
          <li
            className={`mx-5 ${currentPage === `/${Page}` && 'navActive'}`}
            key={Page}
          >
            <Link to={`/${Page}`}></Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Nav;
