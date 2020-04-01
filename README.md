# Mis Datos Leal

Para la propuesta de solución se plantearon 4 microservicios los cuales corresponden a:
1. **Usuarios**
  - El microservicio se ejecuta: nodemon api/index.js
  - Este microservicio utiliza el puerto: 3000
  - En este microservicio se soportan las operaciones de:
    - Registrar un usuario
    - Obtener las transacciones de un usuario. (Requiere autenticación)
    - Obtener la suma de los puntos de las transacciones activas de un usuario. (Requiere autenticación)
2. **Transacciones**
  - El microservicio se ejecuta: nodemon transaction/index.js
  - Este microservicio utiliza el puerto: 3002
  - En este microservicio se soportan las operaciones de:
    - Obtener el listado de todas las transacciones.
    - Registrar una nueva transacción. (Requiere autenticación)
    - Desactivar una transacción específica. (Requiere autenticación)
3. **Exportaciones**
  - El microservicio se ejecuta: nodemon export/index.js
  - Este microservicio utiliza el puerto: 3003
  - En este microservicio se soportan las operaciones de:
    - Exportar las todas las transacciones de un usuario, tanto activas como inactivas. (Requiere autenticación)
4. **Base de datos**
  - El microservicio se ejecuta: nodemon mysql/index.js
  - Este microservicio utiliza el puerto: 3001

**Notas:**
- La documentación de los endpoints se especificaron en el siguiente link: https://documenter.getpostman.com/view/10863044/SzYZ2KLL?version=latest
- Se hizo uso de una base de datos remota para mayor facilidad. Se puede acceder a la misma por medio del link: https://remotemysql.com/phpmyadmin/index.php?db=xSLo3ser5A
  - Usuario: xSLo3ser5A
  - Contraseña: CvoYTihfdX
- Todos los microservicio apuntan a la base de datos por lo cual el microservicio de la base de datos es el primero que se debe iniciar.
