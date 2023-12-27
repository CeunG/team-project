import React, { useCallback, useEffect, useState } from "react";

import SubIntroSingle from "@components/SubIntroSingle";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { loginAction } from "./../stores/userStore";
import axios from "axios";

function Users() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [data, setData] = useState({ email: "", password: "" });
  const changeData = useCallback((evt) => {
    setData((data) => ({ ...data, [evt.target.name]: evt.target.value }));
  }, []);

  const login = useCallback(
    async (evt) => {
      evt.preventDefault();
      const resp = await axios.post("http://localhost:8000/users/login", data);
      console.log(resp.data);
      if (resp.data.status === 500) window.alert(resp.data.message);
      else {
        const storage = window.sessionStorage;
        storage.setItem("name", resp.data.data.name);
        storage.setItem("email", resp.data.data.email);
        storage.setItem("id", resp.data.data.id);
        dispatch(loginAction(resp.data.data));
        navigate("/boards");
      }
    },
    [data, navigate, dispatch]
  );

  const { name } = useSelector((state) => state.userStore);

  /*
  // redux-thunk
  const login = useCallback((evt) => {
    evt.preventDefault();
    dispatch(loginAction(data));
  }, [dispatch, data]);
  */

  useEffect(() => {
    if (name) navigate("/boards");
  }, [navigate, name]);

  return (
    <main id='main'>
      {/* ======= Intro Single ======= */}
      <SubIntroSingle
        title='Please enter your email and password.'
        pathName='User'
      ></SubIntroSingle>

      {/* ======= About Section ======= */}
      <section className='section-about'></section>

      {/* =======LOGIN Section ======= */}
      <section className='section-agents section-t8' style={{ paddingTop: "50px" }}>
        <div className='container'>
          <div className='row'>
            <div className='col-md-12'>
              <div
                className='title-wrap d-flex justify-content-between'
                style={{ paddingBottom: "15px" }}
              >
                <div className='title-box'>
                  <h2 className='title-a'>LOGIN</h2>
                </div>
              </div>
            </div>
          </div>
          <div className='row'>
            <form className='col-sm-12'>
              <div className='col-sm-12 position-relative form-group mb-3'>
                <label htmlFor='email' className='form-label'>
                  E-Mail
                </label>
                <input
                  type='text'
                  className='form-control'
                  id='email'
                  name='email'
                  value={data.email}
                  onChange={changeData}
                />
              </div>
              <div className='col-sm-12 position-relative form-group mb-3'>
                <label htmlFor='password' className='form-label'>
                  Password
                </label>
                <input
                  type='password'
                  className='form-control'
                  id='password'
                  name='password'
                  value={data.password}
                  onChange={changeData}
                />
              </div>

              <div className='col-sm-12 position-relative form-group'>
                <button type='submit' className='btn btn-danger btn-sm' onClick={login}>
                  SEND
                </button>{" "}
                <button type='reset' className='btn btn-primary btn-sm'>
                  RESET
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Users;

Users.defaultProps = {
  sub: "",
};
