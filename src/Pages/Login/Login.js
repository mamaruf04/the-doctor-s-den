import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";
import SocialLogin from "../SocialLogin/SocialLogin";


const Login = () => {
  const {register, watch, handleSubmit, formState: { errors}} = useForm();
  const {signIn, resetPassword} = useContext(AuthContext);
  const [signInError ,setSignInError] = useState('');
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  

  const handleSignIn = (data) => {
    console.log(data);
    setSignInError('');
    signIn(data.email, data.password)
    .then(res => {
      toast.success('Login successfully!')
        navigate(from, { replace: true });
    })
    .catch(err => {
      console.log(err.message)
      setSignInError(err.message)
      toast.error(err.message)
    })
  };

  const HandlePasswordReset = () => {
    const resetPassEmail = watch("email");
    resetPassword(resetPassEmail)
    .then(res => {
      console.log(res);
      toast.success('Email send successfully! Please check your mail.')
    })
    .catch(err => {
      toast.error(err.message)
    })
  }


  return (
    <section className="flex flex-col justify-center items-center ">
      <div className="w-96 shadow-xl p-7 rounded-md">
        <form onSubmit={handleSubmit(handleSignIn)}>
          <h2 className="text-2xl text-center font-bold">Login</h2>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              onChange={(e) => console.log(e)}
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
            {/* errors will return when field validation fails  */}
            {errors.password && (
              <span className="text-red-600 text-sm">
                {errors.password.message}
              </span>
            )}
            <label className="label">
              <Link onClick={HandlePasswordReset} className="label-text-alt">Forget Password?</Link>
            </label>
          </div>

          <input
            className="input mt-6 input-bordered bg-accent text-white w-full "
            type="submit"
            value={"LOGIN"}
          />
          {
            signInError && <p className='text-red-600 py-2'>{signInError}</p>
          }
        </form>
        <p className="my-2 text-sm text-center">
          New to Doctors Portal?
          <Link to={"/signup"} className="text-primary">
            {" "}
            Create new account.
          </Link>
        </p>
        <div className="divider">OR</div>
        <SocialLogin></SocialLogin>
      </div>
    </section>
  );
};

export default Login;
