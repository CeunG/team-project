import React, { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useForm } from 'react-hook-form';
// npm install react-hook-form

function Signup() {
  const navigate = useNavigate();

  const [password] = useState('');
  const [confirmPassword] = useState('');
  const [setError] = useState('');

  const handleSign = () => {
    if (password !== confirmPassword) {
      setError('비밀번호가 일치하지 않습니다.');
    } else {
      console.log('회원가입 성공');
    }
  };

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {},
    mode: 'onBlur',
  });

  const submitEvent = useCallback(
    async (data) => {
      // console.log(data)
      try {
        const formData = new FormData();
        const files = document.querySelector('input[name="profile"]').files;
        formData.append('data', JSON.stringify(data));
        formData.append('profile', files[0]);

        // eslint-disable-next-line no-unused-vars
        const resp = await axios({
          method: 'POST',
          url: 'http://localhost:8000/users/signup',
          headers: { 'Content-type': 'multipart/form-data' },
          data: formData,
        });
        // console.log(resp);
        navigate('/login');
      } catch (error) {
        console.error(error);
      }
    },
    [navigate],
  );

  const errorEvent = (error) => console.error(error);

  return (
    <main id="main">
      {/* ======= About Section ======= */}
      <section className="section-about">
        <div className="container">
          <form className="row" onSubmit={handleSubmit(submitEvent, errorEvent)}>
            <div className="col-sm-12 mb-3">
              <label htmlFor="email" className="form-label">
                이메일: <span style={{ color: 'orange' }}>{errors.email?.message}</span>
              </label>
              <input
                type="text"
                className="form-control"
                id="email"
                name="email"
                {...register('email', {
                  required: { value: true, message: '이메일은 필수 입력 사항입니다' },
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: '이메일 형식이 아닙니다',
                  },
                })}
              />
            </div>

            <div className="col-sm-12 mb-3">
              <label htmlFor="password" className="form-label">
                패스워드: <span style={{ color: 'orange' }}>{errors.password?.message}</span>
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                {...register('password', {
                  required: { value: true, message: '패스워드는 필수 입력 사항입니다' },
                  pattern: {
                    value: /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/,
                    message: '영문, 숫자, 특수문자를 조합하여 8글자 이상 입력해 주세요',
                  },
                })}
              />
            </div>

            <div className="col-sm-12 mb-3">
              <label htmlFor="password" className="form-label">
                패스워드 확인: <span style={{ color: 'orange' }}>{errors.password?.message}</span>
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                {...register('password', {
                  required: { value: true, message: '패스워드는 필수 입력 사항입니다' },
                  pattern: {
                    value: /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/,
                    message: '영문, 숫자, 특수문자를 조합하여 8글자 이상 입력해 주세요',
                  },
                })}
              />
            </div>

            <div className="col-sm-12 mb-3">
              <label htmlFor="name" className="form-label">
                이름: <span style={{ color: 'orange' }}>{errors.name?.message}</span>
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                {...register('name', {
                  required: { value: true, message: '이름은 필수 입력 사항입니다' },
                })}
              />
            </div>

            <div className="col-sm-12 mb-3">
              <label htmlFor="profile" className="form-label">
                프로파일 이미지
              </label>
              <input
                type="file"
                className="form-control"
                id="profile"
                name="profile"
                accept="image/*"
                {...register('profile')}
              />
            </div>
            <div className="col-sm-12">
              <button
                onClick={handleSign}
                type="submit"
                className="btn btn-danger"
                style={{ paddingTop: '10px' }}
              >
                SEND
              </button>{' '}
              <button type="reset" className="btn btn-primary" style={{ paddingTop: '10px' }}>
                RESET
              </button>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}

export default Signup;

Signup.defaultProps = {
  sub: '',
};
