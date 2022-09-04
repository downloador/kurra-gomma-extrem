import Page from "../helpers/page"


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
  <Page>
    <div
    style={{
      display: "flex",
      justifyContent: "center",
    }}
    >
      <Button text="join"/>
      <Button text="host"/>
    </div>
  </Page>
  )
}

export default HomePage
