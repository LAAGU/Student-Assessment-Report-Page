export default function StudentButton({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className="
        group
        cursor-pointer
        min-w-75
        px-6 py-4
        text-lg
        text-white
        bg-white/5
        border border-white/10
        rounded-xl
        transition-all
        duration-200
        hover:bg-white/10
        hover:border-white/20
      "
    >
      <div className="flex items-center justify-between">
        <div className="transition-colors group-hover:text-white mr-5">
          {children}
        </div>

        <span
          className="
            text-gray-400
            opacity-0
            translate-x-1
            transition-all
            group-hover:opacity-100
            group-hover:translate-x-0
          "
        >
          →
        </span>
      </div>
    </div>
  );
}
