import { Suspense } from "react";
import { Outlet, NavLink } from "react-router-dom";
import { Loader } from "components/Loader/Loader";

export const SharedLayout = () => {
  return (
    <div>
      <header>
        {/* <Logo>
          <span role="img" aria-label="computer icon">
            💻
          </span>{" "}
          GoMerch Store
        </Logo> */}
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/movies">Movies</NavLink>
        </nav>
      </header>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </div>
  );
};