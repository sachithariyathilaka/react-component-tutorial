import React from 'react';

/**
 * Class component of the UI.
 *
 * @author  Sachith Ariyathilaka
 * @version 1.0.0
 * @since   2024/09/08
 */
export class ClassComponent extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            name: props.name
        }
    }

    render() {
        return (
            <h1>Welcome {this.state.name} to the React Component Tutorial</h1>
        );
    }
}
