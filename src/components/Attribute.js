import React, { useState } from "react";
import PropTypes from "prop-types";

export const Attribute = (props) => {
  const [defaultAttributes, setDefaultAttributes] = useState([
    15, 14, 13, 12, 10, 8,
  ]);
  return (
    <div className="attributes">
      <div>
        <Selector
          text="STR"
          options={defaultAttributes}
          func={setDefaultAttributes}
        />
      </div>
      <div>
        <Selector
          text="DEX"
          options={defaultAttributes}
          func={setDefaultAttributes}
        />
      </div>
      <div>
        <Selector
          text="CON"
          options={defaultAttributes}
          func={setDefaultAttributes}
        />
      </div>
      <div>
        <Selector
          text="INT"
          options={defaultAttributes}
          func={setDefaultAttributes}
        />
      </div>
      <div>
        <Selector
          text="WIS"
          options={defaultAttributes}
          func={setDefaultAttributes}
        />
      </div>
      <div>
        <Selector
          text="CHA"
          options={defaultAttributes}
          func={setDefaultAttributes}
        />
      </div>
    </div>
  );
};
Attribute.propTypes = {};

const Selector = (props) => {
  const [thisValue, setThisValue] = useState();
  const [thisSelectedArray, setSelectedArray] = useState();
  // console.log("thisSelectedArray:", thisSelectedArray);
  let arrayLoop = thisSelectedArray ? thisSelectedArray : props.options;
  // console.log("arrayLoop: ", arrayLoop);
  var optionList = arrayLoop.map((option) => {
    return (
      <option value={option} key={option}>
        {option}
      </option>
    );
  });

  return (
    <>
      <p className="attributeText">{props.text}</p>
      <select
        onChange={(e) => {
          if (e.target.value !== "") {
            setThisValue(e.target.value);
            setSelectedArray([e.target.value]);
            reduceAttributeArray(e.target.value, props.options, props.func);
          } else {
            setSelectedArray();
            console.log("thisValue: ", thisValue);
            restoreAttributeArray(thisValue, props.options, props.func);
            setThisValue(e.target.value);
          }
        }}
      >
        <option value=""> </option>
        {optionList}
      </select>
    </>
  );
};

Selector.propTypes = {
  options: PropTypes.array,
  text: PropTypes.string,
  func: PropTypes.func,
};

const reduceAttributeArray = (currentValue, currentArray, updateState) => {
  let convertedValue = Number(currentValue);
  let filteredArray = currentArray.filter((e) => {
    return e !== convertedValue;
  });
  console.log(filteredArray);
  updateState(filteredArray);
};

const restoreAttributeArray = (currentValue, currentArray, updateState) => {
  let convertedValue = Number(currentValue);
  currentArray.push(convertedValue);
  currentArray.sort((a, b) => b - a);
  updateState(currentArray);
};
