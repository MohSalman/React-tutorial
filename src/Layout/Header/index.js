import { NavLink } from "react-router-dom";

function Header(props) {
    return (
        <ul style={{backgroundColor:"#dedede", listStyle:"none" }}>
            <li style={{display:'inline-block', margin: "10px"}}>
                <NavLink exact to="/">Home</NavLink>
            </li>
            <li style={{display:'inline-block', margin: "10px"}}>
                <NavLink exact to="/product">Product</NavLink>
            </li>
            <li style={{display:'inline-block', margin: "10px"}}>
                <NavLink exact to="/contact">Contact</NavLink>
            </li>
            <li style={{display:'inline-block', margin: "10px"}}>
                <NavLink exact to="/about">About</NavLink>
            </li>
            <li style={{display:'inline-block', margin: "10px"}}>
                <NavLink exact to="/react-state">React State</NavLink>
            </li>
            <li style={{display:'inline-block', margin: "10px"}}>
                <NavLink exact to="/post">Post</NavLink>
            </li>
        </ul>
    );
  }
  
  export default Header;
  