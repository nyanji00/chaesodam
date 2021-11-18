import styled from "@emotion/styled";
import Header from "./Header";

interface LayoutProps {
  children: React.ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <LayoutRoot>
      <Header />
      {children}
    </LayoutRoot>
  );
}

const LayoutRoot = styled.div`
  display: flex;
  justify-content: center;
  width: 1920px;
  margin: auto;
  padding-top: 110px;
`;

export default Layout;
