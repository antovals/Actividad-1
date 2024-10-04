// Función flecha para añadir valores al display
const appendToDisplay = (value) => {
    document.getElementById("display").value += value;
};

// Función flecha para limpiar el display
const clearDisplay = () => {
    document.getElementById("display").value = "";
};

// Función flecha para calcular la expresión en el display
const calculate = () => {
    const display = document.getElementById("display").value;
    
    try {
        const result = eval(display); // Evalúa la expresión
        document.getElementById("display").value = `${result}`; // Template string para mostrar el resultado
    } catch (error) {
        document.getElementById("display").value = "Error"; // Mostrar 'Error' si algo sale mal
    }
};
