import React from "react";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { incrementCounter, decrementCounter, resetCounter } from "actions";

import ViewContainer from "components/UI/ViewContainer";
import Button from "components/UI/Button";

const Main = ({ actions, counter }) => (
    <ViewContainer>
        <div className="flex justify-center">
            Hey, I'm an app \o/, and now I have hot reloading really?!
        </div>
        <div className="flex justify-around m3">
            <Button label="incrementing" color="primary" action={() => actions.incrementCounter(1)} />
            <Button label="decrement" color="primary" action={() => actions.decrementCounter(1)} />
            <Button label="reset" color="red" action={() => actions.resetCounter()} />
        </div>
        <div>
            counter: { counter }
        </div>
    </ViewContainer>
);

function mapStateToProps(state) {
    return {
        counter: state.counter.get("value"),
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators({ incrementCounter, decrementCounter, resetCounter }, dispatch),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);
