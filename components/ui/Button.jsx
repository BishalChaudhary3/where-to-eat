export default function Button({ children, variant = "primary", onClick }) {
    const base =
      "px-6 py-3 rounded-2xl font-medium transition";
  
    const styles = {
      primary: "bg-black text-white hover:scale-105",
      outline:
        "border border-black hover:bg-black hover:text-white",
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