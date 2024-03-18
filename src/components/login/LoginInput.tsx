import { FieldErrors, UseFormRegister } from "react-hook-form";
import { LoginFormType } from "./LoginForm";

export default function LoginInput({
  register,
  errors,
}: {
  register: UseFormRegister<LoginFormType>;
  errors: FieldErrors<LoginFormType>;
}) {
  return (
    <div className="flex flex-col gap-4 w-full">
      {errors.root && (
        <div className="flex w-full h-16 border justify-center items-center text-md font-medium bg-red-300">
          <p>{errors.root.message}</p>
        </div>
      )}
      <div className="flex flex-col gap-1 text-lg">
        <label>Username</label>
        <input
          type="text"
          className="h-10 w-full border border-black rounded-xl p-2 focus:outline-none focus:border-2 focus:border-blue-600"
          placeholder="JohnDoe"
          {...register("username")}
        ></input>
        {errors.username && (
          <div className="text-red-700 text-sm">{errors.username.message}</div>
        )}
      </div>
      <div className="flex flex-col gap-1 text-lg">
        <label>Password</label>
        <input
          type="password"
          className="h-10 w-full border border-black rounded-xl p-2 focus:outline-none focus:border-2 focus:border-blue-600"
          placeholder="****"
          {...register("password")}
        ></input>
        {errors.password && (
          <div className="text-red-700 text-sm">{errors.password.message}</div>
        )}
      </div>
      <a
        href="#"
        className="underline text-blue-800 min-w-max max-w-min inline"
      >
        Forgot Password?
      </a>
    </div>
  );
}
