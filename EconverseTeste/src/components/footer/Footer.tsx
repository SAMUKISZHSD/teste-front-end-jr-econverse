import "./footer.scss";
import Visa from "../../assets/icons/footer/visa.svg?react";
import Elo from "../../assets/icons/footer/elo.svg?react";
import Alelo from "../../assets/icons/footer/alelo.svg?react";
import Diners from "../../assets/icons/footer/dinners.svg?react";
import Ifood from "../../assets/icons/footer/ifood.svg?react";
import Mastercard from "../../assets/icons/footer/mastercard.svg?react";
import Pix from "../../assets/icons/footer/pix.svg?react";
import Amex from "../../assets/icons/footer/amex.svg?react";
import Ticket from "../../assets/icons/footer/ticket.svg?react";
import Sodexo from "../../assets/icons/footer/sodexo.svg?react";
import Vtex from "../../assets/icons/footer/vtex.svg?react";
import Econverse from "../../assets/icons/footer/econverse.svg?react";
import Facebook from "../../assets/icons/footer/facebook.svg?react";
import Instagram from "../../assets/icons/footer/instagram.svg?react";
import Youtube from "../../assets/icons/footer/youtube.svg?react";

const icons = [
  <Visa />,
  <Elo />,
  <Alelo />,
  <Diners />,
  <Ifood />,
  <Mastercard />,
  <Pix />,
  <Amex />,
  <Ticket />,
  <Sodexo />,
];

const Footer = () => {
  return (
    <footer className="footer-bg">
      <div className="footer-top">
        <div className="container footer-content">
          <div className="footer-about">
            <p>Sobre nós</p>
            <ul>
              <li>
                <a href="">Conheça</a>
              </li>
              <li>
                <a href="">COMO COMPRAR</a>
              </li>
              <li>
                <a href="">Indicação e Desconto</a>
              </li>
            </ul>
            <div className="footer-about-social-media">
              <ul>
                <li>
                  <Facebook />
                </li>
                <li>
                  <Instagram />
                </li>
                <li>
                  <Youtube />
                </li>
              </ul>
            </div>
          </div>

          <div className="footer-info">
            <p>INFORMAÇÕES ÚTEIS</p>
            <ul>
              <li>
                <a href="">FALE CONOSCO</a>
              </li>
              <li>
                <a href="">DÚVIDAS</a>
              </li>
              <li>
                <a href="">Prazos de Entrega</a>
              </li>
              <li>
                <a href="">Formas de Pagamento</a>
              </li>
              <li>
                <a href="">Política de privacidade</a>
              </li>
              <li>
                <a href="">Trocas e Devoluções</a>
              </li>
            </ul>
          </div>

          <div className="footer-payment">
            <p>FORMAS DE PAGAMENTO</p>
            <ul>
              {icons.map((icon) => (
                <li>{icon}</li>
              ))}
            </ul>
          </div>

          <div className="footer-newsletter">
            <p className="footer-newsletter-title">
              Cadastre-se e Receba nossas{" "}
              <span className="newsletter-highlight">
                novidades e promoções
              </span>
            </p>
            <p className="footer-newsletter-description">
              Excepteur sint occaecat cudatat non ent, sunt in culpa qui officia
              lorem ipsum
            </p>
            <div className="footer-newsletter-input">
              <input type="text" placeholder="SEU E-MAIL" />
              <button>OK</button>
            </div>
          </div>
        </div>
      </div>

      <div className="container footer-bottom">
        <p>
          Copyright © 2019. Todos os direitos reservados. Todas as marcas e
          suas imagens são de propriedade de seus respectivos donos.
          <br />É vedada a reprodução, total ou parcial, de qualquer conteúdo
          sem expressa autorização.
        </p>
        <div>
          <Econverse />
          <Vtex />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
