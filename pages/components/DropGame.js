import React, { useState, useEffect } from "react";

function DropDagme({ contador, setContador, answers, question }) {
  const [draggingElement, setDraggingElement] = useState(null);
  const [orderedItems, setOrderedItems] = useState([]);
  const [items, setItems] = useState(answers);
  const [disabledBtn, setDisabledBtn] = useState(true);
  const handleDragStart = (e, id) => {
    e.target.classList.add("dragging");
    setDraggingElement(id);
  };

  const handleDragEnd = (e) => {
    e.target.classList.remove("dragging");
    setDraggingElement(null);
    const newOrder = Array.from(document.querySelectorAll(".draggable")).map(
      (item) => parseInt(item.id)
    );
    setOrderedItems(newOrder);
  };
  const handleDragOver = (e) => {
    e.preventDefault();
    const container = e.target.closest(".container");
    const afterElement = getDragAfterElement(container, e.clientY);
    const draggable = document.querySelector(".dragging");

    if (afterElement == null) {
      container.appendChild(draggable);
    } else {
      container.insertBefore(draggable, afterElement);
    }
  };

  const getDragAfterElement = (container, y) => {
    const draggableElements = Array.from(
      container.querySelectorAll(".draggable:not(.dragging)")
    );

    return draggableElements.reduce(
      (closest, child) => {
        const box = child.getBoundingClientRect();
        const offset = y - box.top - box.height / 2;

        if (offset < 0 && offset > closest.offset) {
          return { offset, element: child };
        } else {
          return closest;
        }
      },
      { offset: Number.NEGATIVE_INFINITY }
    ).element;
  };

  useEffect(() => {
    setItems(answers);
  }, [answers]);

  useEffect(() => {
    setItems((items) => [...items].sort(() => Math.random() - 0.5));
  }, [answers]);

  useEffect(() => {
    // Si orderedItems está vacío, no hagas nada
    if (orderedItems.length === 0) return;

    // Verificar si los elementos están en el orden correcto
    const isCorrectOrder = orderedItems.every((id, index) => id === index + 1);
    document.querySelectorAll(".draggable").forEach((item) => {
      if (isCorrectOrder) {
        // Si están en el orden correcto, cambiar el borde a verde
        item.classList.remove("red-border");
        item.classList.add("green-border");
        setDisabledBtn(false); // Habilitar el botón
      } else {
        // Si no están en el orden correcto, cambiar el borde a rojo
        item.classList.remove("green-border");
        item.classList.add("red-border");
        setDisabledBtn(true); // Deshabilitar el botón
      }
    });
  }, [orderedItems]);

  return (
    <>
      <h2 className="text-center">
        {" "}
        {contador > 0 ? question : "Que Empiece El Juego"}
      </h2>

      <div className="App">
        <div className="container d-flex" onDragOver={handleDragOver}>
          {contador > 0 ? (
            <>
              {items.map((item, index) => (
                <p
                  className={`draggable  ${
                    item.id === draggingElement ? "dragging" : ""
                  }`}
                  draggable="true"
                  onDragStart={(e) => handleDragStart(e, item.id)}
                  onDragEnd={handleDragEnd}
                  key={item.id}
                  id={item.id}
                >
                  {item.nombre}
                </p>
              ))}
            </>
          ) : null}

          {contador === 0 ? (
            <>
              <p className="center light">
                Organiza de manera correcta los comandos de git para podder
                continuar{" "}
              </p>
              <button
                style={{ margin: "auto", width: "100%" }}
                onClick={() => {
                  setContador(contador + 1);
                }}
              >
                {" "}
                Jugar
              </button>
            </>
          ) : contador === 6 ? (
            <h1 className="light">Felicitaciones Ganaste un premio...</h1>
          ) : null}
        </div>
      </div>
      {contador !== 0 ? (
        <div className="center">
          <button
            disabled={disabledBtn}
            className={disabledBtn ? "lightgrayBtn" : "greenBtn"}
            onClick={() => {
              setContador(contador + 1);
              setDisabledBtn(true); // Deshabilitar el botón
              // Remover las clases 'green-border' y 'red-border' de los elementos
              document.querySelectorAll(".draggable").forEach((item) => {
                item.classList.remove("green-border");
                item.classList.remove("red-border");
              });
            }}
          >
            Continuar
          </button>
        </div>
      ) : null}
    </>
  );
}

export default DropDagme;
