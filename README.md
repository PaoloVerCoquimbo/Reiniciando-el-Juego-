# 🎮 Juego del Número Secreto

Este es un pequeño juego web desarrollado por **Paolov7** como parte del curso **"Reiniciando el juego" del programa Oracle ONE - Alura Latam**.

El objetivo del juego es adivinar un número secreto aleatorio entre 1 y 10. Cada intento entrega una pista hasta que se acierta.

## 🚀 Tecnologías y conceptos aplicados

- **HTML5:** estructura básica del sitio y elementos de entrada.
- **CSS3:** para el estilo de los botones y la interfaz.
- **JavaScript (JS):** lógica del juego, interacción con el usuario y manipulación del DOM.

### 📌 Funcionalidades del juego

- Generación de número secreto aleatorio.
- Captura y validación del número ingresado por el usuario.
- Mensajes dinámicos de retroalimentación (`<h1>`, `<p>`).
- Contador de intentos y mensajes adaptados al número de intentos.
- Desactivación del input y botón tras ganar.
- Botón `Reiniciar juego` habilitado al ganar.
- Cambio visual (color) del botón al acertar.
- Limpieza y enfoque automático del campo de entrada tras cada intento.

## 🧠 Estructura del código

### 1. `generarNumeroSecreto()`
Genera un número aleatorio entre 1 y 10.

### 2. `asignarTextoElemento(elemento, texto)`
Actualiza dinámicamente el contenido de un elemento HTML (`h1`, `p`, etc).

### 3. `verificarIntento()`
Lógica principal del juego: compara el número ingresado con el secreto, da pistas, cuenta intentos, muestra mensajes y modifica la interfaz al acertar.

### 4. `limpiarCaja()`
Limpia y enfoca el campo de entrada del número.

### 5. `reiniciarJuego()`
Reinicia el juego cuando el jugador presiona el botón "Reiniciar".

### 6. `condicionesIniciales()`
Establece el estado base del juego: textos iniciales, número secreto nuevo, habilita los campos.

## ✨ Mejora añadida por Paolov7

- Al acertar, el botón "Intentar" cambia de color (`classList.add('correcto')`) y queda desactivado.
- Control de errores si el input está vacío o no es número.

## 🧪 Cómo probarlo

1. Abre el archivo `.html` en tu navegador.
2. Ingresa un número entre 1 y 10.
3. Sigue las pistas hasta acertar.
4. Presiona "Reiniciar" para volver a jugar.

---

### 📚 Créditos

Proyecto realizado como parte del **programa Oracle ONE – Alura LATAM** por **Paolov7**.

---
