import React, { useState, useEffect } from "react";
import { InputGroup, FormControl, Button, Badge } from "react-bootstrap";
import "./Step1SelectStock.css";

const Step1SelectStock = () => {
  const [stock, setStock] = useState("");
  const [selectedStocks, setSelectedStocks] = useState(() => {
    // Initialize from localStorage
    const storedStocks = localStorage.getItem("selectedStocks");
    return storedStocks ? JSON.parse(storedStocks) : [];
  });

  useEffect(() => {
    localStorage.setItem("selectedStocks", JSON.stringify(selectedStocks));
  }, [selectedStocks]);

  const handleStockSearch = (e) => {
    setStock(e.target.value);
  };

  const handleAddStock = () => {
    if (stock && !selectedStocks.includes(stock)) {
      setSelectedStocks([...selectedStocks, stock]);
      setStock("");
    }
  };

  const handleRemoveStock = (stockToRemove) => {
    setSelectedStocks(selectedStocks.filter((s) => s !== stockToRemove));
  };

  return (
    <div className="step-content">
      <h3>Select Your Preferred Stock's for Updates</h3>
      <p>Begin by searching the stock you want to monitor closely.</p>

      <InputGroup className="mb-3">
        <FormControl
          placeholder="Search for a stock..."
          value={stock}
          onChange={handleStockSearch}
        />
        <Button
          className="search-add-button"
          variant="outline-secondary"
          onClick={handleAddStock}
        >
          Add
        </Button>
      </InputGroup>

      <div className="selected-stocks">
        {selectedStocks.map((stock, index) => (
          <Badge key={index} pill bg="secondary" className="m-1 stock-badge">
            {stock}{" "}
            <span
              className="remove-stock"
              onClick={() => handleRemoveStock(stock)}
            >
              ×
            </span>
          </Badge>
        ))}
      </div>
    </div>
  );
};

export default Step1SelectStock;
