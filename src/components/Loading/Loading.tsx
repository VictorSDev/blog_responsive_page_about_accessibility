
export default function Loading() {
  return (
    <div className="w-full flex-1 h-full flex min-h-[80vh] justify-center items-center">
      <div className="w-full h-full flex justify-center items-center space-x-8">
        <div className="animate-spin w-16 h-16 border-4 border-t-4 border-t-black rounded-full" />
      </div>
    </div>
  );
}
