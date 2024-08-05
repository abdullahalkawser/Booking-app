import React, { useContext } from 'react';
import { AuthContext } from '../../provider/Provider';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Login = () => {
  const { creactLogin } = useContext(AuthContext);


  const navigate = useNavigate();
  const location = useLocation()

  const from = location?.state?.from?.pathname || '/';
  

  const handle = (event) => {
 
    event.preventDefault();
    const formData = new FormData(event.target);
    const email = formData.get('email');
    const password = formData.get('password');
    const data = { email, password };
    console.log(data);

    creactLogin(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        if (user) {
          alert('login sucscfulyyy')
        }

        

        navigate(from, {replace: true})
        

      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage)
        alert(errorMessage);
      });
  };

  return (
    <div>
      <div className="hero mt-10 mb-10">
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100 p-10">
          <h1 className='text-center text-4xl font-bold mt-6'>Login</h1>
          <form className="card-body" onSubmit={handle}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input type="email" name="email" placeholder="email" className="input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input type="password" name="password" placeholder="password" className="input input-bordered" required />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button type="submit" className="btn btn-primary">Login</button>
            </div>
            <Link to={'/register'}><p>You have n't  Acount plz Register </p></Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
