// Array traversing and accessing in Data structure
const ArrayTraversing = () => {
  const array = [10, 20, 30, 40, 50];

  //   Multidimensional Arrays
  const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ];

  for (const element of matrix) {
    for (const value of element) {
      console.log("🚀 ~ ArrayTraversing ~ value:", value);
    }
  }
  for (const element of array) {
    console.log("🚀 ~ ArrayTraversing ~ element:", element);
  }

  const getElem = () => {
    let el = document.getElementById("elem").value;
    alert(`accessing element ${array[el]}`);
  };
  return (
    <div>
      <h2>ArrayTraversing</h2>
      <input type="text" id="elem" />
      <button onClick={getElem}>Get Element</button>
    </div>
  );
};

export default ArrayTraversing;
