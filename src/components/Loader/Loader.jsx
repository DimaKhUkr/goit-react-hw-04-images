import { ProgressBar } from 'react-loader-spinner';
export const Loader = () => {
  return (
    <ProgressBar
      height="80"
      width="80"
      ariaLabel="progress-bar-loading"
      wrapperStyle={{
        display: 'block',
        marginRight: 'auto',
        marginLeft: 'auto',
      }}
      wrapperClass="progress-bar-wrapper"
      borderColor="#F4442E"
      barColor="#51E5FF"
    />
  );
};
