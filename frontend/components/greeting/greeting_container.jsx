import React from 'react';
import {connect} from 'react-redux';
import {logout} from '../../actions/session_actions';
import Greeting from './greeting';

const msp = state => ({
    currentUser: state.entities.users[state.session.id]
  });


const mdp = dispatch => {
  return({
    logout: () => dispatch(logout())
  });
};

export default connect(msp, mdp)(Greeting);
