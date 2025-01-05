document.addEventListener("DOMContentLoaded", () => {
    const button = document.getElementById("clickMe");
    const message = document.getElementById("message");

    const frases = [
        "Você é capaz de realizar grandes coisas!",
        "Acredite no seu potencial!",
        "Siga seus Sonhos",
        "Seja Bom com as Pessoas",
        "Cada dia é uma nova chance de brilhar!"
    ];

    button.addEventListener("click", () => {
        const fraseAleatoria = frases[Math.floor(Math.random() * frases.length)];
        message.textContent = fraseAleatoria;
    });
});
