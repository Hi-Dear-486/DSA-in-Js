// Insert element in array JS | Data Structure
const InsertElement = () => {
  //  Insert at the End (push)
  const arr = [10, 20, 30];
  arr.push(40);

  //  Insert at the Beginning (unshift)
  arr.unshift(5);

  //   Insert at a Specific Index (splice)
  arr.splice(5, 0, 50, 60);

  //   Using the Spread Operator
  const newArr = [...arr, 70];
  console.log("🚀 ~ InsertElement ~ newArr:", newArr);
  return <div>InsertElement</div>;
};

export default InsertElement;
