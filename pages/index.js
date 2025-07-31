function Home() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        textAlign: "center",
        flexDirection: "column",
        padding: "20px",
      }}
    >
      <p style={{ fontSize: "1.5rem", fontStyle: "italic", lineHeight: "1.6" }}>
        "Se você deseja fazer uma torta de maçã do zero,
        <br />
        você deve, primeiro, criar o universo."
      </p>
      <p style={{ marginTop: "15px", fontSize: "1.2rem" }}>— Carl Sagan</p>
    </div>
  )
}

export default Home
