---
sidebar_position: 1
---

# Instalación de Cassandra

Despliega Cassandra de manera sencilla y aprovecha su escalabilidad horizontal para gestionar grandes volúmenes de datos distribuidos con alta disponibilidad y tolerancia a fallos.

## Instalación de Apache Cassandra

### Windows

1. **Descarga Cassandra:**
   - Visita [la página de descargas de Cassandra](http://cassandra.apache.org/download/) y descarga la última versión de Apache Cassandra para Windows.

2. **Descomprime el Archivo:**
   - Extrae el archivo ZIP descargado a una ubicación de tu elección.

3. **Configuración del Entorno:**
   - Añade la ruta del directorio `bin` de Cassandra al PATH del sistema.

4. **Inicia el Servidor Cassandra:**
   - Abre una consola y ejecuta:

     ```powershell
     cassandra
     ```

### macOS

1. **Instalación con Homebrew:**
   - Abre la Terminal.
   - Instala Cassandra con Homebrew:

     ```bash
     brew install cassandra
     ```

2. **Inicia el Servidor Cassandra:**
   - Inicia el servicio Cassandra:

     ```bash
     brew services start cassandra
     ```

### Linux

1. **Instalación:**
   - Usa el sistema de gestión de paquetes de tu distribución. Ejemplo en Ubuntu:

     ```bash
     sudo apt-get update
     sudo apt-get install cassandra
     ```

2. **Inicia el Servidor Cassandra:**
   - Inicia el servicio Cassandra:

     ```bash
     sudo service cassandra start
     ```

### Docker

1. **Descarga la Imagen de Cassandra:**
   - Ejecuta:

     ```bash
     docker pull cassandra
     ```

2. **Inicia un Contenedor Cassandra:**
   - Ejecuta:

     ```bash
     docker run -d -p 9042:9042 --name my-cassandra-container cassandra
     ```

   - Conecta a Cassandra desde una aplicación utilizando el puerto 9042.

## Verificación de la Instalación

Para verificar que Cassandra está funcionando correctamente, puedes utilizar la interfaz de línea de comandos `cqlsh` o conectarte desde una aplicación.

- En Windows, abre una consola y ejecuta `cqlsh`.
- En macOS o Linux, abre la Terminal y ejecuta `cqlsh`.

Luego, puedes ejecutar comandos CQL (Cassandra Query Language) para interactuar con el servidor Cassandra.

Estos son los pasos básicos para instalar Apache Cassandra en diferentes sistemas operativos y Docker. Consulta la documentación oficial de Cassandra para obtener más detalles y opciones de configuración adicionales.
