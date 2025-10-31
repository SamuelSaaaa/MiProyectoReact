const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = 3000;

// Servir archivos estáticos
app.use('/Frontend', express.static(path.join(__dirname, '../Frontend')));

// Ruta específica para el archivo ejecutar-molde.html
app.get('/Frontend/ejecutar-molde.html', (req, res) => {
    res.sendFile(path.join(__dirname, '../Frontend/ejecutar-molde.html'));
});

// Middleware
app.use(cors({
    origin: 'http://127.0.0.1:5500', // Permite el origen del Live Server
    credentials: true
}));
app.use(bodyParser.json());

// Configuración adicional de CORS
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://127.0.0.1:5500');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

// Base de datos simulada
const usuarios = [
    { id: 1, usuario: 'admin', clave: 'admin123' },
    { id: 2, usuario: 'usuario', clave: '123456' }
];

// Rutas para autenticación
app.post('/api/login', (req, res) => {
    console.log('Solicitud de login recibida:', req.body); // Log para debugging
    
    const { usuario, clave } = req.body;
    
    const usuarioEncontrado = usuarios.find(
        u => u.usuario === usuario && u.clave === clave
    );

    if (usuarioEncontrado) {
        console.log('Usuario autenticado correctamente'); // Log para debugging
        res.json({
            success: true,
            mensaje: 'Inicio de sesión exitoso',
            usuario: {
                id: usuarioEncontrado.id,
                usuario: usuarioEncontrado.usuario
            },
            redirectUrl: '/Frontend/ejecutar-molde.html',
        
        });
    } else {
        console.log('Autenticación fallida'); // Log para debugging
        res.status(401).json({
            success: false,
            mensaje: 'Usuario o contraseña incorrectos'
        });
    }
});

// Ruta de prueba
app.get('/test', (req, res) => {
    res.json({ mensaje: 'Servidor funcionando correctamente' });
});

// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor backend ejecutándose en http://localhost:${port}`);
});