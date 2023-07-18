import { useOutlet } from "react-router-dom";
import Header from "../header/header";

const Layout = () => {
  const outlet = useOutlet();
  return (
    <div>
      <Header />
      {outlet}
    </div>
  );
};

export default Layout;
