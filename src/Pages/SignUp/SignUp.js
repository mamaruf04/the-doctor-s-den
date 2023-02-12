import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';

const SignUp = () => {
  const {register, handleSubmit, formState: { errors }} = useForm();
  const {createUser, updateUser} = useContext(AuthContext);
  const [signUpError ,setSignUpError] = useState('');


    const handleSignUp = (data) => {
      setSignUpError('');
      createUser(data.email, data.password)
      .then(result => {
        console.log(result.user);
        const updateUserInfo = {
          displayName: data.name
        }
        updateUser(updateUserInfo)
        .then(res => {})
        toast.success('SignUp successful!')
      })
      .catch(err => {
        console.log(err.message)
        setSignUpError(err.message)
        toast.error(err.message)
      })

    };

    return (
        <section className="flex flex-col justify-center items-center ">
      <div className="w-96 shadow-xl p-7 rounded-md">
        <form onSubmit={handleSubmit(handleSignUp)}>
          <h2 className="text-2xl text-center font-bold">Sign Up</h2>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              className="input input-bordered w-full "
              {...register("name", { required: "Name is required" })}
            />
            {errors.name && (
              <span className="text-red-600  text-sm">
                {errors.name.message}
              </span>
            )}

            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              className="input input-bordered w-full "
              {...register("email", { required: "Email address is required" })}
            />
            {errors.email && (
              <span className="text-red-600  text-sm">
                {errors.email.message}
              </span>
            )}

            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              className="input input-bordered w-full"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be 6 characters long",
                },
              })}
            />
          </div>

          {/* errors will return when field validation fails  */}
          {errors.password && (
            <span className="text-red-600 text-sm">
              {errors.password.message}
            </span>
          )}
          <input
            className="input mt-6 input-bordered bg-accent text-white w-full "
            type="submit"
            value={"SIGN UP"}
          />
          {
            signUpError && <p className='text-red-600 py-2'>{signUpError}</p>
          }
        </form>
        <p className="my-2 text-sm text-center">Already have an account?<Link to={'/login'} className="text-primary"> Login</Link></p>
      <div className="divider">OR</div>
      <button className="btn btn-outline w-full">CONTINUE WITH GOOGLE</button>
      </div>
    </section>
    );
};

export default SignUp;