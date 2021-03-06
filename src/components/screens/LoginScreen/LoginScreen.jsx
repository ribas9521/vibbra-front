import React, { Component } from 'react';
import { images } from '../../../assets';
import { send, sendSso } from './actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Loader } from '../../ui';
import { withRouter } from 'react-router-dom';

class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      login: '',
      password: '',
    };
    this.setLogin = this.setLogin.bind(this);
    this.setPassword = this.setPassword.bind(this);
    this.login = this.login.bind(this);
  }

  setLogin(e) {
    const login = e.target.value;
    this.setState({ login });
  }
  setPassword(e) {
    const password = e.target.value;
    this.setState({ password });
  }
  componentDidUpdate(prevProps) {
    if (this.props.success) this.props.history.push('/');
  }

  login() {
    const { send } = this.props;
    const { login, password } = this.state;
    send({ login, password });
  }
  render() {
    const { login, password } = this.state;
    const { loading } = this.props;
    return (
      <div>
        <hr className="offset-lg" />
        <hr className="offset-lg" />
        <hr className="offset-lg hidden-xs" />
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-4 col-sm-offset-4 login-container">
              {loading ? (
                <Loader />
              ) : (
                <>
                  <div className="text-center">
                    <img src={images.logo} alt="logo" width="180" />
                  </div>
                  <h2 className="modal-title text-center">Bem Vindo!</h2>
                  <br />
                  <div className="signin">
                    <input
                      type="text"
                      name="email"
                      placeholder="E-mail"
                      className="form-control"
                      value={login}
                      onChange={this.setLogin}
                    />
                    <br />
                    <input
                      type="password"
                      name="password"
                      placeholder="Password"
                      className="form-control"
                      value={password}
                      onChange={this.setPassword}
                    />
                    <br />

                    <button onClick={this.login} className="btn btn-primary">
                      Ok
                    </button>
                    <a href="#forgin-password" data-action="Forgot-Password">
                      Password recovery
                    </a>
                  </div>
                  <br />
                  <br />
                  <br />
                </>
              )}
            </div>
          </div>
        </div>
        <hr className="offset-lg" />
        <hr className="offset-lg" />
        <hr className="offset-lg hidden-xs" />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  userData: state.login.data,
  loading: state.login.loading,
  success: state.login.success,
});
const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      send,
      sendSso,
    },
    dispatch
  );

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(LoginScreen)
);
