import React, { useState, useEffect } from "react";
//import PropTypes from 'prop-types';
export const CheckList = (props) => {
  const [isSelected, setIsSelected] = useState({});

  useEffect(() => {
    handleItems(isSelected, props.save);
  }, [isSelected, props.save]);

  let itemList = "";
  if (Array.isArray(props.item)) {
    itemList = props.item.map((item) => (
      <div key={item}>
        <label>
          <input
            type="checkbox"
            name={item}
            id={item}
            checked={!!isSelected[item]}
            onChange={(e) => {
              setIsSelected({ ...isSelected, [item]: e.target.checked });
            }}
          />
          {item}
        </label>
      </div>
    ));
  } else {
    itemList = Object.keys(props.item).map((key) => (
      <div key={key}>
        <label>
          <input
            type="checkbox"
            name={key}
            id={key}
            checked={!!isSelected[key]}
            onChange={(e) => {
              setIsSelected({ ...isSelected, [key]: e.target.checked });
            }}
          />
          {key}
        </label>
      </div>
    ));
  }
  return <div>{itemList}</div>;
};
//CheckList.propTypes = {};

const handleItems = (isSelected, save) => {
  let output = [];
  for (let item in isSelected) {
    if (isSelected[item]) {
      output.push(item);
    }
  }
  save(output);
};
