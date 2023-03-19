import {NavLink} from './navlink';

export default Navbar;

Navbar = () => {  
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
