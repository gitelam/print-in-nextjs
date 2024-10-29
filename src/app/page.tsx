"use client";
export const myData = {
  title: "Mi Plantilla de Ejemplo",
  description: "Esta es una plantilla que puedes imprimir.",
  items: ["Item 1", "Item 2", "Item 3"],
};
const HomePage = () => {
  const handlePrintClick = () => {
    // Serializamos `myData` en JSON y codificamos en URI
    const dataParam = encodeURIComponent(JSON.stringify(myData));
    // Abrimos la página en una nueva ventana
    const printWindow = window.open(`/plantilla?data=${dataParam}`, "_blank");

    if (printWindow) {
      // Cerramos la ventana después de un tiempo suficiente para imprimir
      printWindow.addEventListener("afterprint", () => {
        printWindow.close();
      });
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-8">Página Principal</h1>
      <button
        onClick={handlePrintClick}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Abrir Plantilla para Imprimir
      </button>
    </div>
  );
};

export default HomePage;
