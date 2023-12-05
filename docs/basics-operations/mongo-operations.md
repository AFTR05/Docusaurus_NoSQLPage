---
sidebar_position: 2
---

# Básico en MongoDB


## Operaciones Básicas en MongoDB

- Conexión a mongo
    ```bash
     mongosh
    ```

- Creacion de base de datos MongoDB:

    ```bash
     use tiendaFrutas
    ```

- Creación de una base de datos:

    ```bash
     db.createCollection("frutas")
    ```

- Inserción de datos:

    ```bash
     db.frutas.insert({ nombre: "Manzana", tipo: "Roja", precio: 2.5 })
     db.frutas.insert({ nombre: "Plátano", tipo: "Amarillo", precio: 1.2 })
    ```

    O utilizando insertMany para insertar varios documentos a la vez:

    ```bash
     db.frutas.insertMany([{ nombre: "Fresa", tipo: "Roja", precio: 3.0 },{ nombre: "Uva", tipo: "Morada", precio: 2.8 }])
    ```

- Consulta de datos:

    ```bash
     db.frutas.find()
    ```


- También puedes realizar consultas más específicas:

    ```bash
     db.frutas.find({ tipo: "Roja" })
    ```


- Actualización de datos:

    ```bash
     // Actualizar el precio de las manzanas
     db.frutas.update({ nombre: "Manzana" }, { $set: { precio: 2.8 } })
    ```

    - updateOne:
        ```bash
         // Actualizar el precio de las manzanas utilizando updateOne
         db.frutas.updateOne({ nombre: "Manzana" }, { $set: { precio: 2.8 } })
        ```

    - updateMany:
        ```bash
         // Actualizar el tipo de todas las frutas a "Dulce"
         db.frutas.updateMany({}, { $set: { tipo: "Dulce" } })
        ```

- Eliminación de datos:

    ```bash
     // Eliminar todas las uvas
     db.frutas.remove({ nombre: "Uva" })
    ```

    - deleteOne: 
        ```bash
         // Eliminar una manzana específica utilizando deleteOne
         db.frutas.deleteOne({ nombre: "Manzana" })
        ```

    - deleteMany: 
        ```bash
         // Eliminar todas las frutas con un precio menor a 2.0
         db.frutas.deleteMany({ precio: { $lt: 2.0 } })
        ```
- Índices:

    ```bash
     // Crear un índice en el campo 'nombre'
     db.frutas.createIndex({ nombre: 1 })
    ```

Estos son ejemplos básicos que te dan una idea de cómo realizar operaciones CRUD en MongoDB con una colección de frutas. Puedes adaptar estos ejemplos según tus necesidades específicas.




