import React, { useContext } from 'react';
import login from '../../assets/login.svg'
import { Link } from 'react-router-dom';
import { Authcontext } from '../../provider/Authprovider';

const Signup = () => {

    const {createuser} = useContext(Authcontext);

    const handlesignup = (e)=>
    {
        e.preventDefault();
        const form = e.target;
        const  name = form.email.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name,email,password);

        createuser(email,password)
        .then(result=>
        {
            const user = result.user;
            console.log(user)
        }
        )
        .then(error=>console.log(error))

    }
    return (
        <div>
            <h1>This is log in page </h1>

            <div>
                {/* Login div  */}


                <div className="hero p-8 bg-base-200 min-h-screen">
  <div className="hero-content space-x-10p-8 flex-col lg:flex-row">
    <div className="text-center lg:text-left">
      <img src={login} alt="Description" />

    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <p className='text-3xl text-center font-bold pt-8'>Signup</p>
      <form onSubmit={handlesignup}  className="card-body">
        
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" name="name" placeholder="Your Name" className="input input-bordered" required />
        </div>


        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span  className="label-text" >Password</span>
          </label>
          <input type="password" name="password" placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          {/* <button className="btn btn-primary">Login</button> */}
          <input value='Signup'  type='submit' name='button' className="btn btn-primary" ></input>
        </div>

        <div className=' grid grid-cols-2 '>
             <p>Have An Account ? please </p>  
             <p className='text-blue-700 hover:underline'><Link to="/login"> Login</Link></p>
        </div>
         
      </form>
    </div>
  </div>
</div>
            </div>
        </div>
    );
};

export default  Signup ;