import useTheme from "../hooks/useTheme"


function Home() {
    const {theme} = useTheme()

  return (
    <div style={{
        backgroundColor: theme ==="light" ? "#f5f5f5" : "#121212",
        minHeight: "90vh",
        padding: "40px"
    }}>
        <h1>Welcome to theme context app</h1>

        <p>
            theis is a simple react application useing react context api
        </p>

        <button>
            Explore More
        </button>
    </div>
  )
}

export default Home