import React from 'react';
import Router from 'next/router';

class Crouter extends React.Component {
    static getInitialProps ({ req }) {
        const isServer = !!req;

        if (isServer) {
            return { cat: req.params.cat, color:  req.params.color }
        }
    }


    componentDidMount() {
        console.log(this.props)
    }

    render () {
        return (
            <div>
                {/*<h1>My {this.props.id} blog post</h1>*/}
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
            </div>
        )
    }
}

export default Crouter;