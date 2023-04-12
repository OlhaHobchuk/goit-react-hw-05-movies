import css from './Loader.module.css';

import { RotatingLines } from 'react-loader-spinner';
export const Loader = () => {
  return (
    <div className={css.loaderContainer}>
      <RotatingLines
        strokeColor="blueviolet"
        strokeWidth="5"
        animationDuration="0.75"
        width="96"
        visible={true}
      />
    </div>
  );
};
