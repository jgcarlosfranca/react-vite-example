import { Outlet } from "react-router-dom";
import styled from "styled-components";

interface ILayoutProps {
  sideBarWidth: string;
}

const LayoutWrapper = styled.div<ILayoutProps>`
  display: grid;
  min-height: 100vh;
  grid-template-columns: repeat(13, 1fr);
  width: 100%;
  main {
    min-width: 1150px;
    background-color: ${(props) => props.theme.color.neutra.cinza_fundo};
    grid-column-start: ${({ sideBarWidth }) =>
      sideBarWidth === "SIDEBAR_LARGE" ? "3" : "2"};
    grid-column-end: 14;
  }
`;

const Layout = () => {
  const sideBarState = 'LARGE';

  return (
    <LayoutWrapper sideBarWidth={sideBarState}>
      <main>
        <Outlet />
      </main>
    </LayoutWrapper>
  );
};

export default Layout;
