import React from 'react';
import Board from './Board';
import { connect } from 'react-redux';


class App extends React.Component {
    render() {
      return (
        <div className="game">
          <div className="game-board">
            <Board />
          </div>
          <div className="game-info">
            <div>{/* status */}</div>
            <ol>{/* TODO */}</ol>
          </div>
        </div>
      );
    }
  }

  const mapStateToProps = state => {
    return {
      squares: state.squares,
    };
  };

  export default withRouter(connect(mapStateToProps)(App));
  