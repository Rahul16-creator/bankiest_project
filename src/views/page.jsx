import React, { useRef } from "react";
import Features from "../components/features/Features";
import Header from "../components/headers/Header";
import ErrorBoundary from "../utils/ErrorBoundary";

const Home = React.lazy(() => import("../components/home/Home"));

const HeaderPage = () => {
  const currentRef = useRef(null);
  return (
    <React.Fragment>
      <Header currentRef={currentRef} />
      <ErrorBoundary>
        <React.Suspense fallback="Loading...">
          <Home />
        </React.Suspense>
        <Features currentRef={currentRef} />
      </ErrorBoundary>
    </React.Fragment>
  );
};

export default HeaderPage;
