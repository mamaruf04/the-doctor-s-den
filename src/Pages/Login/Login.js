import React from "react";
import { useForm } from "react-hook-form";
const Login = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <section className="flex flex-col justify-center items-center ">
      <div className="w-96 shadow-xl p-7 rounded-md">
        <form onSubmit={handleSubmit(onSubmit)}>
          <h2 className="text-2xl text-center font-bold">Login</h2>
          <div className="form-control w-full">
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
            <label className="label">
              <span className="label-text-alt">Forget Password?</span>
            </label>
          </div>

          {/* errors will return when field validation fails  */}
          {errors.password && (
            <span className="text-red-600 text-sm">
              {errors.password.message}
            </span>
          )}
          <input
            className="input input-bordered bg-accent text-white w-full "
            type="submit"
            value={"LOGIN"}
          />
        </form>
        <p className="my-2 text-sm text-center">New to Doctors Portal?<span className="text-secondary"> create new account.</span></p>
      <div className="divider">OR</div>
      <button className="btn btn-outline w-full">CONTINUE WITH GOOGLE</button>
      </div>
    </section>
  );
};

export default Login;
