import Footer from "./Footer";
import NavigationMenu from "./NavigationMenu";

interface LayoutProps {
  children: React.ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <>
      <NavigationMenu />
      {children}
      <Footer />
    </>
  );
}

export default Layout;
