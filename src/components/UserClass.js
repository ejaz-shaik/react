import React from "react";

class UserClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            count2: 2
        }
        console.log(this.props.name + " constructor");
    }
    componentDidMount() {
        console.log(this.props.name + " component did mount");
    }
    render(){
        const {name} = this.props;
        console.log(this.props.name + " rendered");
        const {count, count2} = this.state;
        return (
            <div>
                <h1>This is done by {name}</h1>
                <p>Using React.js, Redux, JavaScript</p>
                <p>Thank you for visiting</p>
                <p> Count: {count}</p>
                <button onClick={() => {
                    this.setState({
                        count: this.state.count + 1
                    })
                }}>Increase</button>
            </div>
        )
    }
}

export default UserClass;
