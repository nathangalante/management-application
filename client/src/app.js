import { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import SalesReceipt from "./salesReceipt";

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: {},
            time: {},
        };
    }

    componentDidMount() {
        console.log("component did mount", this.state);
        fetch("/talks")
            .then((resp) => resp.json())
            .then((data) => {
                console.log({ talk: data.name });
                this.setState({ talk: data.name });
            })
            .catch((err) => {
                console.log("Error", err);
            });
    }

    render() {
        console.log("hello there buddy!!");
        return (
            <>
                <BrowserRouter>
                    <SalesReceipt
                        name={this.state.talk}
                        time={this.state.time}
                    />
                </BrowserRouter>
            </>
        );
    }
}
