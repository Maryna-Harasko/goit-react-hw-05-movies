import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Loader } from "components/Loader/Loader";
import { Header, Nav, PageLink } from "./SharedLayout.stelyd";

export const SharedLayout = () => {
  return (
    <>
      <Header>
        <Nav>
          <PageLink to="/">Home</PageLink>
          <PageLink to="/movies">Movies</PageLink>
        </Nav>
      </Header>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};