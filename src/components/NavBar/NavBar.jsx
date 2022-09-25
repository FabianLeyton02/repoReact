import React from "react";
import './NavBar.css';
import CartWidget from "./CartWidget";

function NavBar() {
  return (
    <nav>
      <ul>
        <li><img src="https://www.nicepng.com/png/detail/27-273472_mobile-phone-outline-free-vectors-logos-icons-and.png" alt="logo" /><p>Tienda</p></li>
        <li><a href="#">Apple</a></li>
        <li><a href="#">Samsung</a></li>
        <li><a href="#">Huawei</a></li>
        <li><a href="#">Xiaomi</a></li>
        <li><a href="#">Motorola</a></li>
        <CartWidget/>
      </ul>
    </nav>
  );
}

export default NavBar;
