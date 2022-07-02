import React, { useRef } from "react";
import Footer from "../components/footer/Footer";
import Header from "../components/headers/Header";
import ErrorBoundary from "../utils/ErrorBoundary";

const Home = React.lazy(() => import("../components/home/Home"));
const Features = React.lazy(() => import("../components/features/Features"));
const Operations = React.lazy(() =>
  import("../components/operations/Operations")
);
const SignupSection = React.lazy(() =>
  import("../components/signupSection/SignupSection")
);



const HeaderPage = () => {
  const currentRef = useRef(null);
  return (
    <React.Fragment>
      <ErrorBoundary>
        <React.Suspense fallback="Loading...">
          <Header currentRef={currentRef} />
          <Home currentRef={currentRef} />
          <Features />
          <Operations />
          <SignupSection />
        </React.Suspense>
        <Footer />
      </ErrorBoundary>
    </React.Fragment>
  );
};

export default HeaderPage;
