import { ChangeEvent, Dispatch } from "react";

export default function LoginInput({
  username,
  password,
  setPassword,
  setUsername,
}: {
  username: string;
  password: string;
  setPassword: Dispatch<React.SetStateAction<string>>;
  setUsername: Dispatch<React.SetStateAction<string>>;
}) {
  return (
    <div className="flex flex-col gap-5 w-full">
      <div className="flex flex-col gap-2 text-lg">
        <label>Username</label>
        <input
          type="text"
          className="h-10 w-full border border-black rounded-xl p-2 focus:outline-none focus:border-2 focus:border-blue-600"
          placeholder="JohnDoe"
          value={username}
          onChange={(event: ChangeEvent<HTMLInputElement>) => {
            setUsername(event?.currentTarget.value);
          }}
        ></input>
      </div>
      <div className="flex flex-col gap-3 text-lg">
        <label>Password</label>
        <input
          type="password"
          className="h-10 w-full border border-black rounded-xl p-2 focus:outline-none focus:border-2 focus:border-blue-600"
          placeholder="****"
          value={password}
          onChange={(event: ChangeEvent<HTMLInputElement>) => {
            setPassword(event?.currentTarget.value);
          }}
        ></input>
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
