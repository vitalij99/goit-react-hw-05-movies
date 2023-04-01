import { ColorRing } from 'react-loader-spinner';
import style from './Loading.module.scss';

export const Loader = () => (
  <div className={style.loader}>
    <ColorRing
      visible={true}
      height="80"
      width="80"
      ariaLabel="blocks-loading"
      wrapperStyle={{}}
      wrapperClass="blocks-wrapper"
      colors={['#5b6be1', '#5be1dd', '#5be1ab', '#5be176', '#64e15b']}
    />
  </div>
);
