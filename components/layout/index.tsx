import styled from "@emotion/styled";
import Header from "./Header";

interface LayoutProps {
  children: React.ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <LayoutRoot>
      <div style={{ width: "1920px" }}>
        <Header />
        {children}
      </div>
    </LayoutRoot>
  );
}

const LayoutRoot = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 110px;
`;

export default Layout;
