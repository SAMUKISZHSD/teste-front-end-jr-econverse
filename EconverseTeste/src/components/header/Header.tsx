/// <reference types="vite-plugin-svgr/client" />
import "./header.scss";
import Shield from "../../assets/icons/header/ShieldCheck.svg?react";
import Truck from "../../assets/icons/header/Truck.svg?react";
import CreditCard from "../../assets/icons/header/CreditCard.svg?react";
import Logo from "../../assets/icons/vtex-logo.svg?react";
import Search from "../../assets/icons/header/MagnifyingGlass.svg?react";
import Box from "../../assets/icons/header/Box.svg?react";
import Heart from "../../assets/icons/header/Heart.svg?react";
import User from "../../assets/icons/header/UserCircle.svg?react";
import Cart from "../../assets/icons/header/ShoppingCart.svg?react";
import Crown from "../../assets/icons/header/CrownSimple.svg?react";

const Header = () => {
  return (
    <header className="container">
      <ul className="header-benefits">
        <li>
          <Shield />
          <span>
            Compra <span className="header-highlight">100% segura</span>
          </span>
        </li>
        <li>
          <Truck />
          <span>
            <span className="header-highlight">Frete grátis</span> acima de R$
            200
          </span>
        </li>
        <li>
          <CreditCard />
          <span>
            <span className="header-highlight">Parcele</span> suas compras
          </span>
        </li>
      </ul>
      <div className="header-main">
        <Logo />
        <div className="header-search font-14 medium">
          <input type="text" placeholder="O que você está buscando?" />
          <Search />
        </div>
        <div className="header-menu-icons">
          <Box />
          <Heart />
          <User />
          <Cart />
        </div>
      </div>
      <nav className="header-navbar">
        <ul>
          <li>Todas Categorias</li>
          <li>Supermercado</li>
          <li>Livros</li>
          <li>Moda</li>
          <li>Lançamentos</li>
          <li>Ofertas do dia</li>
          <li>
            <Crown />
            Assinatura
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
