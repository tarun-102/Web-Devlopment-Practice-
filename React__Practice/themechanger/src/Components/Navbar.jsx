import useTheme from "../hooks/useTheme"

function Navbar() {
    const {theme,toggleTheme} = useTheme();

  return (
    <nav style={{
        backgroundColor: theme === "light" ? "#ffffff": "#1f1f1f1f",
        color: theme === "light" ? "#000000" : "#ffffff",
        padding: "15px 30px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
    }}>
        <h1 style={{
            color: theme === "light" ? "black" : "black",
        }}>
            Theme App
        </h1>
        
        <button onClick={toggleTheme}>
            {theme === "light" ? "dark" : "light"}
        </button>
    </nav>
  )
}

export default Navbar