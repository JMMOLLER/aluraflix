import styled from "styled-components";

const Header = styled.header`
  width: 100vw;
  height: 68px;
  padding: 0 60px;
  position: fixed;
  display: flex;
  align-items: center;
  background-color: transparent;
  background-image: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.7) 10%,
    transparent
  );
  z-index: 1;
`;
const LogoContainer = styled.div`
  width: 92.5px;
  margin-right: 25px;

  img {
    width: 100%;
  }
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  color: #fff;

  ul {
    display: inherit;
    flex-direction: row;
    list-style: none;

    li {
      font-size: 14px;
      margin-left: 20px;
      color: #e5e5e5;
    }
  }
`;

const SecondaryNav = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  position: absolute;
  right: 4%;
  gap: 15px;

  a {
    width: 36px;
    height: 29.8px;
    margin-top: 4.2px;
    padding: 0 6px 3px 6px;
  }
  a:last-child {
    margin: 0;
  }
`;

export default function index() {
  return (
    <Header>
      <LogoContainer>
        <a href="/"><img src="/logo.svg" alt="logo" /></a>
      </LogoContainer>
      <Nav>
        <ul>
          <li>
            <a href="#">Inicio</a>
          </li>
          <li>
            <a href="#">Séries</a>
          </li>
          <li>
            <a href="#">Películas</a>
          </li>
          <li>
            <a href="#">Novedades populares</a>
          </li>
        </ul>
      </Nav>
      <SecondaryNav>
        <a href="#">
          <img src="/icons/search.svg" alt="search" />
        </a>
        <a href="#">
          <img src="/icons/bell.svg" alt="bell" />
        </a>
        <a href="#">
          <img src="/icons/avatar.svg" alt="user" />
        </a>
      </SecondaryNav>
    </Header>
  );
}
