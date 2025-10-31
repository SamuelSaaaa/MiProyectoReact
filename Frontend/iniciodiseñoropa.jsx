
const { useState } = React;

function App() {
  const [usuario, setUsuario] = useState("");
  const [clave, setClave] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!usuario || !clave) {
      alert("Por favor, completa todos los campos.");
      return;
    }

    try {
      const response = await fetch('http://localhost:3000/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ usuario, clave })
      });

      const data = await response.json();
      
      if (data.success) {
        setIsLoggedIn(true);
        // Si la autenticación es exitosa, redirigir a la página de molde
        const baseUrl = window.location.origin;
        window.location.href = baseUrl + '/' + data.redirectUrl;
      } else {
        alert(data.mensaje || "Usuario o contraseña incorrectos");
      }
    } catch (error) {
      console.error('Error:', error);
      alert("Error al intentar iniciar sesión");
    }
  };

  if (isLoggedIn) {
    return <MoldePrenda />;
  }

  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        background: "#f0f2f5",
        minHeight: "100vh",
      }}
    >
      <center>
        <h1 style={{ color: "#10b2e9", paddingTop: "40px" }}>
          Bienvenido A Diseño de Prenda
        </h1>
      </center>

      <div
        style={{
          background: "rgba(255,255,255,0.85)",
          padding: "30px 40px",
          borderRadius: "12px",
          boxShadow: "0 4px 16px rgba(0,0,0,0.15)",
          maxWidth: "350px",
          margin: "40px auto",
          textAlign: "center",
        }}
      >
        <img
          src="https://cdn-icons-png.flaticon.com/512/892/892458.png"
          alt="Logo moda"
          style={{ width: "80px", marginBottom: "15px" }}
        />
        <div
          style={{
            fontSize: "1.5em",
            fontWeight: "bold",
            marginBottom: "20px",
            color: "#10b2e9",
            letterSpacing: "1px",
          }}
        >
          Inicia sesión para diseñar tu prenda
        </div>

        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: "18px", textAlign: "left" }}>
            <label
              htmlFor="usuario"
              style={{ display: "block", marginBottom: "6px", fontWeight: "600" }}
            >
              Usuario
            </label>
            <input
              type="text"
              id="usuario"
              name="usuario"
              placeholder="Ingresa tu usuario"
              value={usuario}
              onChange={(e) => setUsuario(e.target.value)}
              style={{
                width: "100%",
                padding: "10px",
                border: "1px solid #bdbdbd",
                borderRadius: "6px",
                fontSize: "1em",
              }}
            />
          </div>

          <div style={{ marginBottom: "18px", textAlign: "left" }}>
            <label
              htmlFor="clave"
              style={{ display: "block", marginBottom: "6px", fontWeight: "600" }}
            >
              Contraseña
            </label>
            <input
              type="password"
              id="clave"
              name="clave"
              placeholder="Ingresa tu contraseña"
              value={clave}
              onChange={(e) => setClave(e.target.value)}
              style={{
                width: "100%",
                padding: "10px",
                border: "1px solid #bdbdbd",
                borderRadius: "6px",
                fontSize: "1em",
              }}
            />
          </div>

          <button
            type="submit"
            style={{
              width: "100%",
              padding: "10px",
              background: "#10b2e9",
              color: "#fff",
              border: "none",
              borderRadius: "6px",
              fontSize: "1em",
              fontWeight: "bold",
              cursor: "pointer",
              transition: "background 0.3s",
            }}
            onMouseOver={(e) => (e.target.style.background = "#43e97b")}
            onMouseOut={(e) => (e.target.style.background = "#10b2e9")}
          >
            Iniciar sesión
          </button>
        </form>
      </div>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
