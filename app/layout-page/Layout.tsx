import { ReactNode } from "react";
import Footer from "./Footer";
import Header from "./Header";

interface LayoutProps {
  children: ReactNode; // tout élément React valide
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  // ...
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
};
export default Layout;
