import { useState } from "react";
import data from "./data";
import "./styles.css";

export default function Accordian() {
  const [selected, setSelected] = useState(null);
  const [enableMultiSelection, setEnableMultiSelection] = useState(false);
  const [multiple, setMultiple] = useState([]);

  function handleSingleSelection(getCurrentId) {
    setSelected(getCurrentId === selected ? null : getCurrentId);
  }

  function handleMultiSelection(getCurrentId) {
    let copyMultiple = [...multiple];
    const findIndexOfCurrentId = copyMultiple.indexOf(getCurrentId);

    if (findIndexOfCurrentId === -1) copyMultiple.push(getCurrentId);
    else copyMultiple.splice(findIndexOfCurrentId, 1);

    setMultiple(copyMultiple);
  }

  console.log(selected, multiple);
  return (
    <div className="acc-wrapper">
      {/* Habilitar seleccion multiple */}
      <button onClick={() => setEnableMultiSelection(!enableMultiSelection)}>
        Enable Multiple Selection
      </button>
      <div className="accordian">
        {/* Opciones del Acordion */}
        {data && data.length > 0 ? (
          data.map((dataItem) => (
            <div className="item" key={dataItem.id}>
              <div
                onClick={() =>
                  enableMultiSelection
                    ? handleMultiSelection(dataItem.id)
                    : handleSingleSelection(dataItem.id)
                }
                className="title"
              >
                <h3>{dataItem.question}</h3>
                <span>+</span>
              </div>
              {
                enableMultiSelection ?
                multiple.indexOf(dataItem.id) !== -1 && (
                  <div className="acc-content">{dataItem.answer}</div>
                )
                : selected === dataItem.id && (
                  <div className="acc-content">{dataItem.answer}</div>
                )
              }
            </div>
          ))
        ) : (
          <div>No data found...</div>
        )}
      </div>
    </div>
  );
}
