"use client";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

type Data = {
  title: string;
  description: string;
  items: string[];
};

const Plantilla = () => {
  const searchParams = useSearchParams();
  const [data, setData] = useState<Data | null>(null);

  useEffect(() => {
    const dataParam = searchParams.get("data");
    if (dataParam) {
      // Decodificamos y parseamos el JSON de la URL
      const parsedData = JSON.parse(decodeURIComponent(dataParam));
      setData(parsedData);

      // Llamamos a `window.print()` y emitimos el evento `afterprint` para cerrar la ventana
      window.print();
      window.addEventListener("afterprint", () => {
        window.close();
      });
    }
  }, [searchParams]);

  if (!data) return <p>Cargando...</p>;

  return (
    <div className="p-8 bg-white text-gray-800 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">{data.title}</h1>
      <p className="mb-6">{data.description}</p>
      <ul className="list-disc list-inside space-y-2">
        {data.items.map((item, index) => (
          <li key={index} className="text-lg">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Plantilla;
