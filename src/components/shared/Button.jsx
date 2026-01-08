export default function Button({
  children,
  className = "",
  type = "button",
  ...props
}) {
  return (
    <button
      type={type}
      className={`h-10 px-4 rounded-md bg-[#1B8354] text-white text-sm font-medium hover:bg-[#166a44] transition ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
