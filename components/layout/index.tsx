import styled from "@emotion/styled";
import Header from "./Header";
import { useRouter } from "next/dist/client/router";
import Image from "next/image";
import copyright from "@/public/icons/copyright.svg";

interface LayoutProps {
  children: React.ReactNode;
}

function Layout({ children }: LayoutProps) {
  const router = useRouter();

  return (
    <LayoutRoot>
      <Header />
      {children}
      {router.route !== "/" && (
        <Copyright>
          <Image src={copyright} />
        </Copyright>
      )}
    </LayoutRoot>
  );
}

const LayoutRoot = styled.div`
  position: relative;
`;

const Copyright = styled.div`
  position: absolute;
  bottom: 33.22px;
  right: 200.18px;
`;

export default Layout;
