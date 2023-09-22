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
  transition: background-color 0.5s ease;
  z-index: 3;

  &.scrolling {
    background-color: #000;
  }
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
      color: #c2c2c2;

      .primary-nav__link {
        transition: color 0.4s;
      }
      .primary-nav__link.active {
        color: #fff !important;
      }
      .primary-nav__link:hover {
        color: #b3b3b3;
      }
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

  .secundary-nav__link {
    width: 36px;
    height: 29.8px;
    margin-top: 4.2px;
    padding: 0 6px 3px 6px;
  }
  .secundary-nav__link:last-child {
    margin: 0;
  }
`;

interface HeaderProps {
  categories: string[];
}

export default function index({ categories }: HeaderProps) {
  let content: string[] = [];

  if (categories && categories.length >= 2) {
    content = [...categories].sort(() => Math.random() - 0.5).slice(0, 3);
  }

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    // use scroll intoview
    document
      .querySelectorAll("ul li a")
      .forEach((item) => item.classList.remove("active"));
    let target = e.currentTarget.getAttribute("href");
    if (!target || target === "#") target = "body";
    const element = document.querySelector(target) as HTMLElement;
    e.currentTarget.classList.add("active");
    element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Header>
      <LogoContainer>
        <a href="/">
          <img src="/logo.svg" alt="logo" />
        </a>
      </LogoContainer>
      <Nav>
        <ul>
          <li>
            <a
              className="primary-nav__link active"
              href="#"
              onClick={handleScroll}
            >
              Inicio
            </a>
          </li>
          <li>
            <a
              className="primary-nav__link"
              href={
                categories && content.length !== 0
                  ? "#" + content[0].replace(/ /g, "")
                  : "#"
              }
              onClick={handleScroll}
            >
              {categories && content.length !== 0 ? content[0] : "Séries"}
            </a>
          </li>
          <li>
            <a
              className="primary-nav__link"
              href={
                categories && content.length !== 0
                  ? "#" + content[1].replace(/ /g, "")
                  : "#"
              }
              onClick={handleScroll}
            >
              {categories && content.length !== 0 ? content[1] : "Películas"}
            </a>
          </li>
          <li>
            <a
              className="primary-nav__link"
              href={
                categories && content.length !== 0
                  ? "#" + content[2].replace(/ /g, "")
                  : "#"
              }
              onClick={handleScroll}
            >
              {categories && content.length !== 0
                ? content[2]
                : "Novedades populares"}
            </a>
          </li>
        </ul>
      </Nav>
      <SecondaryNav>
        <a className="secundary-nav__link" href="#">
          <img src="/icons/search.svg" alt="search" />
        </a>
        <a className="secundary-nav__link" href="#">
          <img src="/icons/bell.svg" alt="bell" />
        </a>
        <a className="secundary-nav__link" href="#">
          <img src="/icons/avatar.svg" alt="user" />
        </a>
      </SecondaryNav>
    </Header>
  );
}
