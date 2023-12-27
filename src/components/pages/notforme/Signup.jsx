import React, { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";

import SubIntroSingle from "@components/SubIntroSingle";
import axios from "axios";

function About() {
  const navigate = useNavigate();

  const [data, setData] = useState({ name: "", email: "", password: "" });
  const changeData = useCallback((evt) => {
    setData((data) => ({ ...data, [evt.target.name]: evt.target.value }));
  }, []);
  const signup = useCallback(
    async (evt) => {
      evt.preventDefault();
      const resp = await axios.post("http://localhost:8000/users/signup", data);
      console.log(resp.data);
      if (resp.data.status === 500) window.alert("사용자가 존재합니다");
      else navigate("/users");
    },
    [data, navigate]
  );

  return (
    <main id='main'>
      {/* ======= Intro Single ======= */}
      <SubIntroSingle
        title='
        Sign up and use our services.'
        pathName='Signup'
      ></SubIntroSingle>

      {/* ======= About Section ======= */}
      <section className='section-about'>
        <div className='container'>
          <form className='row'>
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
            <div className='col-sm-12 position-relative form-group mb-3'>
              <label htmlFor='name' className='form-label'>
                Name
              </label>
              <input
                type='text'
                className='form-control'
                id='name'
                name='name'
                value={data.name}
                onChange={changeData}
              />
            </div>
            <div className='col-sm-12 position-relative form-group'>
              <button type='submit' className='btn btn-danger btn-sm' onClick={signup}>
                SEND
              </button>{" "}
              <button type='reset' className='btn btn-primary btn-sm'>
                RESET
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* =======Team Section ======= */}
      <section className='section-agents section-t8' style={{ padding: "80px" }}></section>
    </main>
  );
}

About.defaultProps = {
  sub: "",
};

export default About;
