import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <div className="w-full h-full m-0 p-0">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
