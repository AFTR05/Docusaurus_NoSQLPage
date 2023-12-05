---
sidebar_position: 2
---

# Instalación de MongoDB

Instala MongoDB en tu sistema en unos pocos pasos simples y comienza a aprovechar las ventajas de esta potente base de datos NoSQL.

## Instalación de MongoDB

### Windows

1. **Descarga MongoDB:**
   - Visita [mongodb.com/try/download/community](https://www.mongodb.com/try/download/community).
   - Selecciona la versión de MongoDB Community Edition para Windows.

2. **Instalación:**
   - Ejecuta el instalador descargado y sigue las instrucciones.
   - Puedes optar por instalar MongoDB Compass durante la instalación.

3. **Configuración del Servicio:**
   - MongoDB se instala como un servicio de Windows. Puedes administrarlo desde la consola de servicios.

### macOS

1. **Instalación con Homebrew:**
   - Abre la Terminal.
   - Instala Homebrew (si no lo tienes):

     ```bash
     /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
     ```

   - Instala MongoDB con Homebrew:

     ```bash
     brew tap mongodb/brew
     brew install mongodb-community
     ```

2. **Iniciar el Servidor:**
   - Inicia el servidor MongoDB:

     ```bash
     brew services start mongodb/brew/mongodb-community
     ```

### Linux

1. **Agregar Repositorio (opcional):**
   - Algunas distribuciones permiten agregar el repositorio oficial de MongoDB. Consulta la [documentación oficial](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-ubuntu/) para instrucciones específicas.

2. **Instalación:**
   - Usa el gestor de paquetes de tu distribución. Ejemplo en Ubuntu:

     ```bash
     sudo apt-get update
     sudo apt-get install -y mongodb
     ```

   - En distribuciones basadas en Red Hat (como Fedora):

     ```bash
     sudo yum install -y mongodb
     ```

3. **Iniciar el Servidor:**
   - Inicia el servicio MongoDB:

     ```bash
     sudo service mongod start
     ```

### Docker

1. **Descargar la Imagen de MongoDB:**
   - Ejecuta:

     ```bash
     docker pull mongo
     ```

2. **Iniciar un Contenedor MongoDB:**
   - Ejecuta:

     ```bash
     docker run -d -p 27017:27017 --name my-mongo-container mongo
     ```

   - Conecta a MongoDB desde `mongodb://localhost:27017`.

Estos son los pasos básicos para instalar MongoDB en diferentes sistemas operativos y Docker. Consulta la documentación oficial de MongoDB para detalles más específicos según la versión que estás instalando.
