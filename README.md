# Sorteo de Amigos Secreto
![Amigo Secreto](https://github.com/MiguelPress/alura_challenge_01/blob/main/assets/portada-readme.png?version%3D1737963218434)
Esta pequeña aplicación fue creada con la finalidad de gestionar listas de amigos y hacer un sorte entre los nombres de los amigos agregados.
El proyecto pretende que el estudiante desarrolle habilidades de lógica de programación.

---

## Características

- Permite agregar nombres de amigos a una lista.
- Verifica que el nombre ingresado sea válido (solo letras, incluyendo acentos y `ñ`).
- Detecta duplicados en la lista y permite confirmación antes de agregar nombres repetidos.
- Realiza un sorteo entre los amigos agregados, eligiendo un ganador al azar.
- Incluye funciones para limpiar listas y reiniciar el input de nombres.

---

## Tecnologías utilizadas

- **JavaScript:** Para la lógica de la aplicación.
- **HTML/CSS:** Para el diseño y estructura de la interfaz.
- **Expresiones regulares:** Para validar que el nombre ingresado solo contenga letras.

---

## Funciones principales

### `agregarAmigo()`
Permite agregar un nombre a la lista de amigos si cumple con los criterios de validación:
- Solo letras (incluyendo acentos y `ñ`).
- No permite nombres vacíos.
- Maneja nombres duplicados con una confirmación.

### `actualizarLista()`
Sirve para pasar los valores que se esten agregando al Array[]; hacia la lista `ul` del html.

### `validarTexto()`
Verifica si el texto ingresado cumple las reglas de validación:
- Solo se permiten letras.
- El campo no puede estar vacío.

### `sortearAmigo()`
Elige aleatoriamente un ganador de la lista de amigos:
- Requiere al menos dos nombres para realizar el sorteo.
- Muestra el ganador en pantalla y reinicia las listas después de anunciar el resultado.

### `limpiarListas()`
Limpia las listas y elimina a los amigos previamente agregados.

### `limpiarInput()`
Reinicia el campo de entrada para que el usuario pueda ingresar un nuevo nombre.

---

## Cómo usar este proyecto

1. Clona este repositorio:
   git clone https://github.com/tu-usuario/nombre-del-repositorio.git
