import { Link, useLocation } from 'react-router-dom';
import style from './BtnBack.module.scss';
import { useRef } from 'react';

const BtnBack = () => {
  const location = useLocation();
  const valueRef = useRef(location);

  return (
    <Link to={valueRef.current.state ?? '/'} className={style.btnBack}>
      Back
    </Link>
  );
};

export default BtnBack;
