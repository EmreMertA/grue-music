import React from 'react';
import ContentLoader from 'react-content-loader';

type Props = {};

const TopChartsLoader: React.FC<Props> = (props) => (
  <ContentLoader
    speed={3}
    width={400}
    height={55}
    viewBox='0 0 400 55'
    backgroundColor='#508697'
    foregroundColor='#508697'
    {...props}
  >
    <circle cx='25' cy='26' r='16' />
    <rect x='51' y='15' rx='5' ry='5' width='194' height='20' />
  </ContentLoader>
);

type ContainerProps = {};

const TopChartsLoaderContainer = (props: ContainerProps) => {
  return (
    <>
      <TopChartsLoader />
      <TopChartsLoader />
      <TopChartsLoader />
      <TopChartsLoader />
      <TopChartsLoader />
    </>
  );
};

export default TopChartsLoaderContainer;
