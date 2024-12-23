// Array traversing and accessing in Data structure
const ArrayTraversing = () => {
  const array = [10, 20, 30, 40, 50];

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
