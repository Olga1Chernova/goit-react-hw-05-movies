import { NavLink } from 'react-router-dom';

import css from './navbar.module.scss';
import items from './items';

const getFullName = ({ isActive }) => {
  return isActive ? `${css.link} ${css.active}` : `${css.link}`;
}

const Navbar = () => {
    const elements = items.map(({ id, text, link }) =>
      <li key={id}>
        <NavLink className={getFullName} to={link}>
          {text}
        </NavLink>
      </li>
    );

    return (
        <ul className={css.menu}>
                {elements}
        </ul>
    )
}

export default Navbar;