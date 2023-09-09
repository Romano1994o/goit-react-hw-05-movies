import { HeaderWrapper, NavItem } from './NavigationHeader.styled';

export const NavigationHeader  = () => {
  return (
    <HeaderWrapper>
      <NavItem to="/" end>
        Home
      </NavItem>
      <NavItem to="movies">Movies</NavItem>
    </HeaderWrapper>
  );
};
