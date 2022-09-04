import useWindowSize from "./get_width"

export default function Page({children}) {
  let width = useWindowSize().width;
  console.log(width)
  console.log(parseInt(width) > 100)
  return <main
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
    width: `${width > 565 ? "50" : "100"}%`,
    backgroundColor: "var(--base)",
    height: `${width > 565 ? "60" : "100"}%`,
    maxWidth: "100% !important",
    minWidth: "500px",
    }}
    >
      {children}
    </div>
  </main>
}