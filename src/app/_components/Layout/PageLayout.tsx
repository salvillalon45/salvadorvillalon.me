import Footer from "./Footer";
import NavigationMenu from "./NavigationMenu";

interface PageLayoutProps {
  children: React.ReactNode;
}

function PageLayout({ children }: PageLayoutProps) {
  return (
    <>
      <NavigationMenu />
      {children}
      <Footer />
    </>
  );
}

export default PageLayout;
