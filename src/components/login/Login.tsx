import LoginForm from "./LoginForm";

export default function Login() {
  return (
    <div className="container flex flex-col justify-center items-center w-100 h-lvh text-slate-800">
      <div className="bg-white p-9 rounded min-w-[500px] flex flex-col items-center justify-center gap-6 shadow-xl">
        <div className="text-3xl font-bold">LOGIN</div>
        <LoginForm></LoginForm>
      </div>
    </div>
  );
}
