
function HomePage() {
  return(
  <main
  style={{
    width: "100%",
    height: "100vh",
    backgroundColor: "var(--base-dark)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  }}
  >
    <div
    style={{
      width: "50%",
      backgroundColor: "var(--base)",
    }}
    >
      <div
      style={{
        display: "flex",
        justifyContent: "center",
      }}
      >
        <div>
          join
        </div>
        <div>
          start
        </div>
      </div>
    </div>
  </main>
  )
}

export default HomePage
