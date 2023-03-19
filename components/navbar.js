import {NavLink} from './navlink';

const Navbar = () => {  
  return (
    <nav className='topNav'>
      <NavLink href='/' exact className="nav-item">
        Home
      </NavLink>
      <NavLink href='/posts' className="nav-item">
        Posts
      </NavLink>
      <NavLink href='/recipes' className="nav-item">
        Recipes
      </NavLink>
    </nav>
  );
}

export default Navbar;
