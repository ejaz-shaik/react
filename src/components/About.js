import React from 'react';
import UserClass from './UserClass';

class About extends React.Component {
  constructor(props) {
    super(props);
    console.log("Parent constructor");
  }
  componentDidMount() {
    console.log("Parent component did mount");
  }
  render() {
    console.log("Parent render");
    return (
      <div>
        <UserClass name={"First"} />
        <UserClass name={"Second"} />
        <UserClass name={"Third"} />
      </div>
    )
}
}

export default About;
