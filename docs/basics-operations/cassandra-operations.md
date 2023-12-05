---
sidebar_position: 1
---

# Básico en Cassandra

## Operaciones Básicas en Cassandra

### Keyspace
- Crear un keyspace:
  ```bash
   CREATE KEYSPACE biblioteca
   WITH replication = {'class': 'SimpleStrategy', 'replication_factor': 3};
  ```

- Usar un keyspace:

  ```bash
   USE biblioteca;
  ```

- Eliminar el keyspace de la biblioteca:

  ```bash
   DROP KEYSPACE biblioteca;
  ```


### Tablas

- Crear una tabla:

  ```bash
   CREATE TABLE libros (
       isbn UUID PRIMARY KEY,
       titulo text,
       autor text,
       editorial text,
       anio_publicacion int
  );
  ```
- Eliminar la tabla de libros:

  ```bash
   DROP TABLE libros;
  ```

### Elemento

- Insertar datos en la tabla de libros:

  ```bash
   INSERT INTO libros (isbn, titulo, autor, editorial, anio_publicacion)
   VALUES (uuid(), 'Cien años de soledad', 'Gabriel García Márquez', 'Sudamericana', 1967);
  ```

- Consultar información sobre un elemento por atributo:

  ```bash
   SELECT * FROM libros WHERE isbn = el_isbn;
  ```

- Actualizar elemento:

  ```bash
   UPDATE libros SET anio_publicacion = nuevo_anio WHERE isbn = el_isbn;
  ```

- Eliminar un elemento por atributo:
  ```bash
   DELETE FROM libros WHERE isbn = el_isbn;
  ```

- Crear un índice en el autor para facilitar búsquedas:

  ```bash
   CREATE INDEX idx_autor ON libros (autor);
   //Esto permitirá realizar consultas más eficientes basadas en el autor.
  ```

Estos son ejemplos básicos para darte una idea de cómo usar comandos de Cassandra en el contexto de una biblioteca y libros. 
