import React from "react";
import Header from "components/UI/Header";
import Footer from "components/UI/Footer";

const ViewContainer = ({ children }) => (
    <div className="flex flex-column" style={ { minHeight: "100vh" } }>
        <Header />
        <div className="flex-auto items-stretch center">
            { children }
        </div>
        <Footer />
    </div>
);

export default ViewContainer;
