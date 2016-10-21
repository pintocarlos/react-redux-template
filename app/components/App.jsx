import React from "react";

import Main from "components/views/Main";

// usually the App component uses React lifecycle methods to check for loaded content...

const App = React.createClass({
    componentWillMount() {
        // do stuff here before component is mounted, like fetch data...
    },
    render() {
        return (
            <Main { ...this.props } />
        );
    },
});

export default App;
