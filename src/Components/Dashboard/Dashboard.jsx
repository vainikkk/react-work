import React from 'react'
import {SortableContainer, SortableElement} from 'react-sortable-hoc';
import arrayMove from 'array-move';
import { useState } from 'react';
import Employee from "../../Assets/mocks/employee.json"
 
// Not using an ES6 transpiler
const SortableItem = SortableElement(({value}) => <tr><td>{value.empName}</td><td>{value.dept}</td><td>{value.designation}</td></tr>);
 
const SortableList = SortableContainer(({items}) => {
  return (
    <tbody>
      {items.map((value, index) => (
        <SortableItem key={`item-${value.employeeId}`} index={index} value={value} />
      ))}
    </tbody>
  );
});

const Dashboard = () => {
  const [ items, setItems ] = useState(Employee)

  const onSortEnd = ({oldIndex, newIndex}) => {
    setItems(arrayMove(items, oldIndex, newIndex));
  };
  return (
    <div className="homepage">
      This is Dashboard
      <SortableList items={items} onSortEnd={onSortEnd} />
    </div>
  )
}

export default Dashboard;