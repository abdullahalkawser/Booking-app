import React, { useContext } from 'react'
import { AuthContext } from '../../provider/Provider';
import { Link } from 'react-router-dom';

const  Register =()=> {
  const { creacteUser}= useContext (AuthContext)

  const handledubmite = (event)=>{
    event.preventDefault();
    const formData = new FormData(event.target);
    const email = formData.get('email');
    const password = formData.get('password');
    const data = {email,password}
    console.log(data)



    creacteUser(email,password)
    .then((userCredential) => {

      const user = userCredential.user;
    console.log(user)
    })
    .catch((error) => {
      
      const errorMessage = error.message;
     alert(errorMessage)
    });
  
  }
  return (
    <div>

        <div className="hero mt-10 mb-10">
          


    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100 p-10">
      <h1 className='text-center text-4xl font-bold mt-6'>Sign Up</h1>
      <form className="card-body" onSubmit={handledubmite}>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name='email' placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name='password' placeholder="password" className="input input-bordered" required />
     
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
        <Link to={'/logins'}><p> You Have an Acount Please Login</p>  </Link>
      </form>
    </div>

</div>
    </div>
  )
}

export default Register;