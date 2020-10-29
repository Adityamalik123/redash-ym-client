import { fromPairs } from 'lodash';
import React from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../helpers/Authorized/Authorized';

export default class PlaceHolder extends React.Component {
  render() {
    return (
      <AuthContext.Consumer>
        {(auth) => (
          <div>
            {this.props.info || 'PlaceHolder'}
            <br></br>
            <br></br>
            {`session: ${JSON.stringify(auth)}`}
            <br></br>
            <Link to='/'> Home</Link>
          </div>
        )}
      </AuthContext.Consumer>
    );
  }
}
