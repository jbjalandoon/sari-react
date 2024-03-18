export default function LoginAction({
  isSubmitting,
}: {
  isSubmitting: boolean;
}) {
  return (
    <div className="flex flex-col w-full">
      <button
        disabled={isSubmitting}
        type="submit"
        className="w-full rounded-xl bg-blue-800 p-3 text-xl text-white font-medium"
      >
        Login
      </button>
    </div>
  );
}
