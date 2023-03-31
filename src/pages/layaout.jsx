import AppBar from 'components/AppBar/AppBar';
import { Outlet } from 'react-router-dom';

const Layaout = () => {
  return (
    <>
      <AppBar />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Layaout;
