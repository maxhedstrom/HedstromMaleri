import { useState, useRef, useEffect } from "react";

export default function RotCalculator() {
  const [cost, setCost] = useState("");
  const [rawCost, setRawCost] = useState("");
  const inputRef = useRef(null);

  const formatCurrency = (value) => {
    const numericValue = value.replace(/\D/g, "");
    if (!numericValue) return "";
    return Number(numericValue).toLocaleString("sv-SE") + " kr";
  };

  function handleInputChange(e) {
    const selectionStart = e.target.selectionStart;
    const currentValue = e.target.value;

    const digitsBeforeCursor = currentValue.slice(0, selectionStart).replace(/\D/g, "").length;
    const unformatted = currentValue.replace(/\D/g, "");
    setCost(Number(unformatted));

    let formatted = "";
    if (unformatted) {
      formatted = Number(unformatted).toLocaleString("sv-SE") + " kr";
    }
    setRawCost(formatted);

    let newCursorPos = 0;
    let digitCount = 0;
    for (let i = 0; i < formatted.length; i++) {
      if (/\d/.test(formatted[i])) digitCount++;
      if (digitCount >= digitsBeforeCursor) {
        newCursorPos = i + 1;
        break;
      }
    }
    const numericPartEnd = formatted.length - 3;
    if (newCursorPos > numericPartEnd) newCursorPos = numericPartEnd;

    setTimeout(() => {
      if (inputRef.current) inputRef.current.setSelectionRange(newCursorPos, newCursorPos);
    }, 0);
  }

  const handleBlur = () => {
    if (!rawCost) {
      setRawCost("");
    }
  };

  let savings;
  let message = "";
  if (cost > 100000) {
    savings = 50000;
    message = "Taket för ROT-Avdrag går vid 50 000 kr inom ett år.";
  } else if (cost) {
    savings = cost / 2;
  } else {
    savings = 0;
  }

  const newTotal = cost - savings;

  return (
    <div className="mt-12 p-6 bg-red-50 rounded-xl shadow-md">
      <h3 className="text-[var(--detalj-color)] text-2xl font-semibold text-center mb-4">
        ROT-Beräknare
      </h3>
      <div className="flex flex-col items-center">
        <label htmlFor="cost" className="mb-2 text-lg">
          Ange arbetskostnad (kr):
        </label>
        <input
          ref={inputRef}
          type="text"
          id="cost"
          value={rawCost}
          onChange={handleInputChange}
          onBlur={handleBlur}
          placeholder="t.ex. 30 000 kr"
          pattern="\d*"
          inputMode="numeric"
          className="w-64 p-2 border border-red-300 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-[var(--detalj-color)]"
        />

        <p className="text-center text-[13px] md:text-[18px] md:text-lg">
          Vad du sparar i ROT-avdrag (50%):{" "}
          <span className="font-bold">{formatCurrency(savings?.toFixed(0) || "0")}</span>
        </p>
        <p className="text-left md:text-lg">
          Vad du betalar: <span className="font-bold">{formatCurrency(newTotal?.toFixed(0) || "0")}</span>
        </p>
        {message && <p className="text-red-500">{message}</p>}
      </div>
    </div>
  );
}
