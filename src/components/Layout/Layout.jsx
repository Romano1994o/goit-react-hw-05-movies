import { Outlet } from 'react-router-dom';
import { LayoutBox } from './Layout.styled';
import { NavigationHeader } from '../NavigationHeader/NavigationHeader';
import { Suspense } from 'react';
import { Loader } from './../Loader/Loader';

export const Layout = () => {
  return (
    <LayoutBox>
      <NavigationHeader />
      <Suspense fallback={<Loader/>}>
        <Outlet />
      </Suspense>
    </LayoutBox>
  );
};
