import React, { useRef } from "react";
import Header from "../components/headers/Header";
import ErrorBoundary from "../utils/ErrorBoundary";

const Home = React.lazy(() => import("../components/home/Home"));
const Features = React.lazy(() => import("../components/features/Features"));

const HeaderPage = () => {
  const currentRef = useRef(null);
  return (
    <React.Fragment>
      <ErrorBoundary>
        <React.Suspense fallback="Loading...">
          <Header currentRef={currentRef} />
          <Home currentRef={currentRef}/>
          <Features  />
        </React.Suspense>
      </ErrorBoundary>
    </React.Fragment>
  );
};

export default HeaderPage;
