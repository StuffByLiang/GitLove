import React from 'react';

class Rain extends React.Component<{text: string}> {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div className="animContainer">
                        <div className="square">
                            {this.props.text}
                        </div>
                        <div className="square">
                            {this.props.text}
                        </div>
                        <div className="square">
                            {this.props.text}
                        </div>
                        <div className="square">
                            {this.props.text}
                        </div>
                        <div className="square">
                            {this.props.text}
                        </div>
                    </div>
                    <div className="animContainer">
                        <div className="square1">
                            {this.props.text}
                        </div>
                        <div className="square1">
                            {this.props.text}
                        </div>
                        <div className="square1">
                            {this.props.text}
                        </div>
                        <div className="square1">
                            {this.props.text}
                        </div>
                        <div className="square1">
                            {this.props.text}
                        </div>
                        <div className="square1">
                            {this.props.text}
                        </div>
                        <div className="square1">
                            {this.props.text}
                        </div>
                    </div>
                    <div className="animContainer">
                        <div className="square2">
                            {this.props.text}
                        </div>
                        <div className="square2">
                            {this.props.text}
                        </div>
                        <div className="square2">
                            {this.props.text}
                        </div>
                        <div className="square2">
                            {this.props.text}
                        </div>
                        <div className="square2">
                            {this.props.text}
                        </div>
                    </div>
            </div>
        );
    }
}


export default Rain;