import {NavLink} from './navlink';
import {useRouter} from 'next/router';

import styles from '../styles/Navbar.module.css'

// export const navLinks = [
//   { 
//     name: "Home", 
//     path: "/" 
//   },
//   {
//     name: "Posts",
//     path: "/posts",
//   },
//   {
//     name: "Recipes",
//     path: "/recipes",
//   },
// ];


// const NavItem = ({ item }) => {
//   const router = useRouter();
//   return <>{router.pathname === "/" ? item : ""}</>;
// };

// // proptypes check
// NavItem.propTypes = {
//   item: propTypes.string,
// };


const Navbar = () => {  
  return (
    <nav className='topNav'>
      <NavLink href='/' className="nav-item">
        Home
      </NavLink>
      <NavLink href='/posts' className="nav-item">
        Posts
      </NavLink>
      <NavLink href='/recipes' className="nav-item">
        Recipes
      </NavLink>
    </nav>
    // <nav>
    //   {navLinks.map((link, index) => {
    //     return (
    //       <ul>
    //         {/* <Link href={link.path} className={currentRoute === link.path ? 'active' : 'nonActive'}> */}
    //         <Link href={link.path} className={styles.active}>
    //           {link.name}
    //         </Link>
    //       </ul>
    //     );
    //   })}
    // </nav>
  );
}
export default Navbar;