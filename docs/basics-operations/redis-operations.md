---
sidebar_position: 3
---

# Básico en Redis
## Operaciones Básicas en Redis

### Strings (SET y GET):

- Actualizar:

  ```bash
   SET auto:1 "Toyota Corolla"
   GETSET auto:1 "Toyota Camry"  # Actualizar el valor y obtener el anterior
  ```

- Eliminar:

  ```bash
   DEL auto:1
  ```

### Listas (RPUSH, LRANGE, LPOP):

- Actualizar:

  ```bash
   RPUSH autos "Chevrolet Camaro"
   RPUSH autos "Nissan Altima"
   LSET autos 0 "Chevrolet Malibu"  # Actualizar el primer elemento
  ```

- Eliminar:

  ```bash
   LPOP autos  # Eliminar el primer elemento
  ```

### Conjuntos (SADD, SMEMBERS, SREM):

- Actualizar:

  ```bash
   SADD marcas "Toyota"
   SADD marcas "Ford"
  ```

- Eliminar:
  ```bash
   SREM marcas "Toyota"  # Eliminar un miembro del conjunto
   DEL marcas  # Eliminar todo el conjunto
  ```

### Hashes (HSET, HGET, HDEL):

- Actualizar:

  ```bash
   HSET auto:1 modelo "Toyota Corolla" color "Azul" año 2022
   HSET auto:1 color "Rojo"  # Actualizar el color
  ```

- Eliminar:

  ```bash
   HDEL auto:1 año  # Eliminar el campo "año"
  ```

### Publicación/Suscripción (PUBLISH y UNSUBSCRIBE):

- Actualizar:

  ```bash
   PUBLISH noticias_autos "Nuevo modelo lanzado por Toyota"
  ```

- Eliminar:
  ```bash
   UNSUBSCRIBE noticias_autos  # Dejar de recibir noticias
  ```