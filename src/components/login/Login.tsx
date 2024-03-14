export default function Login() {
  return (
    <div className="container flex flex-col justify-center items-center w-100 h-lvh text-slate-800">
      <div className="bg-white p-9 rounded min-w-[500px] flex flex-col items-center justify-center gap-10 shadow-xl">
        <div className="text-3xl font-bold">LOGIN</div>
        <div className="flex flex-col gap-5 w-full">
          <div className="flex flex-col gap-2 text-lg">
            <label>Username</label>
            <input
              type="text"
              className="h-10 w-full border border-black rounded-xl p-2 focus:outline-none focus:border-2 focus:border-blue-600"
              placeholder="JohnDoe"
            ></input>
          </div>
          <div className="flex flex-col gap-3 text-lg">
            <label>Password</label>
            <input
              type="password"
              className="h-10 w-full border border-black rounded-xl p-2 focus:outline-none focus:border-2 focus:border-blue-600"
              placeholder="****"
            ></input>
          </div>
          <a
            href="#"
            className="underline text-blue-800 min-w-max max-w-min inline"
          >
            Forgot Password?
          </a>
        </div>
        <div className="flex flex-col w-full">
          <button className="w-full rounded-xl bg-blue-800 p-3 text-xl text-white font-medium">
            Login
          </button>
        </div>
      </div>
    </div>
  );
}
