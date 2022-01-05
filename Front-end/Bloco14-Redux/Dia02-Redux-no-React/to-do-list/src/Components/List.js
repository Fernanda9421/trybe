import React, { Component } from 'react';
import { connect } from 'react-redux';

class List extends Component {
  render() {
    const { list } = this.props;
    return (
      <div>
        <div>
          {
            list.map((item, index) => (
              <p key={ index }>{ item }</p>
            ))
          }
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  list: state.myReducer,
});

export default connect(mapStateToProps)(List);
