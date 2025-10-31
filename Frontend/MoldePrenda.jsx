const { useState, useEffect } = React;

function MoldePrenda() {
    const [tipoPrenda, setTipoPrenda] = useState('camiseta');
    const [marca, setMarca] = useState('POLO');
    const [color, setColor] = useState('#e57373');
    const [talla, setTalla] = useState('S');
    const [tela, setTela] = useState('Algodón');

    const obtenerSVG = (tipo, color) => {
        if (tipo === "camiseta") {
            return (
                <svg width="120" height="150" viewBox="0 0 120 150">
                    <path 
                        d="M20,30 Q10,40 30,50 L30,120 Q30,140 60,140 Q90,140 90,120 L90,50 Q110,40 100,30 L80,20 Q70,10 60,20 Q50,10 40,20 Z"
                        fill={color} 
                        stroke="#888" 
                        strokeWidth="2"
                    />
                    <line x1="60" y1="20" x2="60" y2="140" stroke="#bbb" strokeWidth="2"/>
                </svg>
            );
        }
        if (tipo === "pantalon") {
            return (
                <svg width="100" height="150" viewBox="0 0 100 150">
                    <path 
                        d="M30,20 L70,20 L80,140 L60,140 L55,60 L45,60 L40,140 L20,140 Z"
                        fill={color} 
                        stroke="#888" 
                        strokeWidth="2"
                    />
                    <line x1="50" y1="20" x2="55" y2="140" stroke="#bbb" strokeWidth="2"/>
                    <line x1="50" y1="20" x2="45" y2="140" stroke="#bbb" strokeWidth="2"/>
                </svg>
            );
        }
        if (tipo === "chaqueta") {
            return (
                <svg width="120" height="150" viewBox="0 0 120 150">
                    <path 
                        d="M30,30 Q10,50 30,70 L40,140 Q60,150 80,140 L90,70 Q110,50 90,30 L80,20 Q70,10 60,20 Q50,10 40,20 Z"
                        fill={color} 
                        stroke="#888" 
                        strokeWidth="2"
                    />
                    <rect x="55" y="30" width="10" height="110" fill="#fff" stroke="#888" strokeWidth="1"/>
                </svg>
            );
        }
        return null;
    };

    const styles = {
        moldeMain: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'flex-start',
            gap: '32px',
            maxWidth: '700px',
            margin: '40px auto'
        },
        moldePanel: {
            background: '#f7f7f7',
            borderRadius: '10px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
            padding: '24px 18px',
            minWidth: '220px',
            maxWidth: '260px'
        },
        h2: {
            marginTop: 0,
            fontSize: '1.2em',
            color: '#10b2e9'
        },
        label: {
            display: 'block',
            marginBottom: '12px',
            textAlign: 'left'
        },
        select: {
            width: '100%',
            marginTop: '4px',
            marginBottom: '8px',
            padding: '8px',
            borderRadius: '6px',
            border: '1px solid #bbb'
        },
        moldePrenda: {
            width: '180px',
            height: '260px',
            borderRadius: '10px',
            border: '2px solid #ccc',
            background: '#eee',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            fontWeight: 'bold',
            fontSize: '1.1em',
            color: '#333',
            boxShadow: '0 2px 8px rgba(0,0,0,0.08)'
        }
    };

    return (
        <div style={styles.moldeMain}>
            <div style={styles.moldePanel}>
                <h2 style={styles.h2}>Personaliza tu prenda</h2>
                <form onSubmit={(e) => e.preventDefault()}>
                    <label style={styles.label}>
                        Tipo de prenda:
                        <select 
                            style={styles.select}
                            value={tipoPrenda}
                            onChange={(e) => setTipoPrenda(e.target.value)}
                        >
                            <option value="camiseta">Camiseta</option>
                            <option value="pantalon">Pantalón</option>
                            <option value="chaqueta">Chaqueta</option>
                        </select>
                    </label>
                    <label style={styles.label}>
                        Marca:
                        <select 
                            style={styles.select}
                            value={marca}
                            onChange={(e) => setMarca(e.target.value)}
                        >
                            <option>POLO</option>
                            <option>VELEZ</option>
                            <option>NIKE</option>
                        </select>
                    </label>
                    <label style={styles.label}>
                        Color:
                        <select 
                            style={styles.select}
                            value={color}
                            onChange={(e) => setColor(e.target.value)}
                        >
                            <option value="#e57373">Rojo</option>
                            <option value="#64b5f6">Azul</option>
                            <option value="#81c784">Verde</option>
                            <option value="#fff176">Amarillo</option>
                        </select>
                    </label>
                    <label style={styles.label}>
                        Talla:
                        <select 
                            style={styles.select}
                            value={talla}
                            onChange={(e) => setTalla(e.target.value)}
                        >
                            <option>S</option>
                            <option>M</option>
                            <option>L</option>
                            <option>XL</option>
                        </select>
                    </label>
                    <label style={styles.label}>
                        Tipo de tela:
                        <select 
                            style={styles.select}
                            value={tela}
                            onChange={(e) => setTela(e.target.value)}
                        >
                            <option>Algodón</option>
                            <option>Poliéster</option>
                            <option>Lino</option>
                            <option>Seda</option>
                        </select>
                    </label>
                </form>
            </div>
            <div style={styles.moldePrenda}>
                {obtenerSVG(tipoPrenda, color)}
                <div>{`${marca} | ${talla} | ${tela}`}</div>
            </div>
        </div>
    );
}

// Hacer el componente disponible globalmente
window.MoldePrenda = MoldePrenda;
