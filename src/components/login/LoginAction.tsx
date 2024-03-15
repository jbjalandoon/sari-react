export default function LoginAction({
  onLogin,
}: {
  onLogin: () => Promise<void>;
}) {
  return (
    <div className="flex flex-col w-full">
      <button
        className="w-full rounded-xl bg-blue-800 p-3 text-xl text-white font-medium"
        onClick={onLogin}
      >
        Login
      </button>
    </div>
  );
}
