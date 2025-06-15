export default function MsgError({ message }: { message: string }) {
  return (
      <div
        className="bg-red-100 border border-red-400 mt-4 px-4 py-3 rounded-lg"
        role="alert"
      >
        <span className="text-red-700">{message}</span>
      </div>
  );
}
