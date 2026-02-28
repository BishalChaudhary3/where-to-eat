export default function Button({ children, variant = "primary", onClick }) {
    const base =
      "px-6 py-3 rounded-2xl font-medium transition-all duration-300 ease-in-out";
  
    const styles = {
      primary: "bg-black text-white hover:bg-gray-500",
      outline:
        "border border-black hover:bg-gray-200 hover:text-black hover:scale-105",
    };
  
    return (
      <button
        onClick={onClick}
        className={`${base} ${styles[variant]}`}
      >
        {children}
      </button>
    );
  }