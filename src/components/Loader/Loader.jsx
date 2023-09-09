import { LoadingWrapper, LoaderText, LoaderBar } from './Loader.styled';

export const Loader = () => {
    return (
      <LoadingWrapper>
        <LoaderText>Loading...</LoaderText>
        <LoaderBar>
          <span></span>
        </LoaderBar>
      </LoadingWrapper>
    );
  };
  
