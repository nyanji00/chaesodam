import styled from "@emotion/styled";
import Header from "./Header";
import { useRouter } from "next/dist/client/router";

interface LayoutProps {
  children: React.ReactNode;
}

function Layout({ children }: LayoutProps) {
  const router = useRouter();

  return (
    <>
      <Header />
      {children}
      {router.route !== "/" && <Copyright></Copyright>}
    </>
  );
}

const Copyright = styled.div`
  position: fixed;
  bottom: 36.18px;
  right: 200.18px;
`;

export default Layout;
