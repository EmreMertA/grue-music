import React from 'react';
import ContentLoader from 'react-content-loader';

type Props = {};

const CardLoader: React.FC<Props> = (props) => (
  <ContentLoader
    speed={3}
    width={224}
    height={288}
    viewBox='0 0 224 288'
    backgroundColor='#508697'
    foregroundColor='#508697'
    {...props}
  >
    <rect x='5' y='267' rx='12' ry='12' width='217' height='14' />
    <rect x='5' y='4' rx='12' ry='12' width='217' height='227' />
    <rect x='5' y='241' rx='12' ry='12' width='217' height='14' />
  </ContentLoader>
);

type ContainerProps = {};

const CardLoaderContainer = (props: ContainerProps) => {
  return (
    <>
      <CardLoader />
      <CardLoader />
      <CardLoader />
      <CardLoader />
      <CardLoader />
      <CardLoader />
      <CardLoader />
      <CardLoader />
      <CardLoader />
    </>
  );
};

export default CardLoaderContainer;
