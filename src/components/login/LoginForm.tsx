import { isAlphanumeric } from "validator";
import LoginAction from "./LoginAction";
import LoginInput from "./LoginInput";
import { z } from "zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "@tanstack/react-router";

export type LoginFormType = {
  username: string;
  password: string;
};

const schema = z.object({
  username: z
    .string({
      required_error: "Username is required",
    })
    .min(3, { message: "Username must be minimum 3 characters" })
    .trim()
    .refine(
      (value) =>
        isAlphanumeric(value, "en-US", {
          ignore: "-@!%^&*",
        }),
      { message: "Special Character is not allowed in Username field" }
    ),
  password: z
    .string({
      required_error: "Password is required",
    })
    .min(3, { message: "Password must be minimum 3 characters" })
    .trim(),
});

export default function LoginForm() {
  const auth = useAuth();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormType>({
    resolver: zodResolver(schema),
  });

  const onSubmitForm: SubmitHandler<LoginFormType> = async (data) => {
    try {
      const response = await fetch("http://localhost:8080/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(data),
      });

      if (response.status >= 400) {
        const { msg } = await response.json();
        throw new Error(msg);
      }
      const {
        user: { _id, username, email, role },
      } = await response.json();

      auth.setUser({
        isAuthenticated: true,
        user: {
          id: _id,
          username,
          email,
          role,
        },
      });

      return navigate({ to: "/" });
    } catch (error) {
      console.log(error);
      errors.root!.message = error as string;
    }
  };

  return (
    <form
      className="w-full flex flex-col gap-5"
      onSubmit={handleSubmit(onSubmitForm)}
    >
      <LoginInput register={register} errors={errors} />
      <LoginAction isSubmitting={isSubmitting} />
    </form>
  );
}
