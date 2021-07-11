import React, { useState, useRef, useEffect } from 'react';


const Dropdown = ({ label, options, selection, onSelectionChange }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const onBodyClick = (event) => {
      // Is the clicked element inside my Component?
      // No: close the dropdown
      if (!ref.current.contains(event.target))
        setOpen(false);
    }
    document.body.addEventListener('click', onBodyClick, { capture: true });
    return () => {
      document.body.removeEventListener('click', onBodyClick, { capture: true });
    };
  }, [])

  const renderedOptions = options.map( option => {
    // Remove current selection from dropdown
    // Returning null means "don't render this"
    if (option.value === selection.value)
      return null;

    return (
      <div
        key={option.value}
        className="item"
        onClick={() => onSelectionChange(option)}
      >
        {option.label}
      </div>
    );
  });


  return (
    <div ref={ref} className="ui form">
      <div className="field">
        <label className="label">{label}</label>
        <div className={`ui selection dropdown ${open ? 'visible active' : ''}`} onClick={() => setOpen(!open)}>
          <i className="dropdown icon"></i>
          <div className="text">{selection.label}</div>
          <div className={`menu ${open ? 'visible transition' : ''}`}>
            {renderedOptions}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dropdown;