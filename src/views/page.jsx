import React, { useRef } from "react";
import { connect } from "react-redux";
import Footer from "../components/footer/Footer";
import Header from "../components/headers/Header";
import Modal from "../components/modals/Modal";
import ErrorBoundary from "../utils/ErrorBoundary";

const Home = React.lazy(() => import("../components/home/Home"));
const Features = React.lazy(() => import("../components/features/Features"));
const Operations = React.lazy(() =>
  import("../components/operations/Operations")
);
const SignupSection = React.lazy(() =>
  import("../components/signupSection/SignupSection")
);



const HeaderPage = ({showModal}) => {
  const currentRef = useRef(null);
  return (
    <div className={`${showModal?'non_scroll':""}`}>
      <ErrorBoundary>
        {showModal && <Modal />}
        <React.Suspense fallback="Loading...">
          <Header currentRef={currentRef} />
          <Home currentRef={currentRef} />
          <Features />
          <Operations />
          <SignupSection />
        </React.Suspense>
        <Footer />
      </ErrorBoundary>
    </div>
  );
};


function mapStateToProps(state) {
  return {
    showModal:state.modal
  }
}


export default connect(mapStateToProps)(HeaderPage);
