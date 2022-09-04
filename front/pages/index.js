
function Button({text, onClick}) {
  return(
    <div style={{
      backgroundColor: "var(--prim)",
      width: "180px",
      padding: "20px 0",
      margin: "32px",
      borderRadius: "20px",
      fontSize: "50px",
      textAlign: "center",
      fontFamily: "'Nunito', sans-serif",
      userSelect: "none",
    }} onClick={onClick}>
      {text}
    </div>
  )
}

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
      width: "100%",
      backgroundColor: "var(--base)",
      height: "100%",
    }}
    >
      <div
      style={{
        display: "flex",
        justifyContent: "center",
      }}
      >
        <Button text="join"/>
        <Button text="host"/>
      </div>
    </div>
  </main>
  )
}

export default HomePage
