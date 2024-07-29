import "./assets/css/index.css";
import Test from "./components/Test";
import Nav from "./components/Nav";
import TestForm from "./components/TestForm"
import { useRef } from "react";
import { useState } from "react";
import TestUseEffect from "./components/TestUseEffect";


function App() {
  let num = 50;
  let city = ["Dhaka", "London", "Barlin", "Tokoyo"];

  // React Hook Method UseRef() uses.
  let HeadLine = useRef(null);

  const change = () => {
    HeadLine.current.innerText="Using React Hook Useref Method";
    // without current property using useRef hook.
    // HeadLine.innerText = "Using React Hook Useref Method";

    console.log(HeadLine);
  };

  // useRef persisted mutable example
  let apiData = useRef(null);
  let showStoreData_1,
    showStoreData_2 = useRef();

  const fetchData = async () => {
    const res = await fetch("https://dummyjson.com/products/1");
    apiData.current = await res.json();

    alert("Successfully called!");
  };

  const showData = () => {
    // let data = JSON.stringify(apiData.current);
    // console.log(apiData.current);
    showStoreData_1.innerText = `Title: ${apiData.current["title"]}, Price: ${apiData.current["price"]}`;
    showStoreData_2.innerText = `description: ${apiData.current["description"]},`;
  };

  let propsObj = {
    name: "Even White",
    age: 45,
    city: "New York",
  };

  let btnClick = () => {
    alert("Button clicked by user!");
  };

  const DemoFormSubmit = (event) => {
    event.preventDefault();
    alert("You submit a form!");
  };

  // React Usestae Hook Method Practice
  let [number, setNumber] = useState(0);
  let [obj, setObj] = useState({
    key1: "key 1 value",
    key2: "key 2 value",
    key3: "key 3 value",
  });

  const objChange = () => {
    setObj((prevObject) => ({
      ...propsObj,
      key1: "New key 1 value",
    }));
  };

  // TODO App Using React hook useState Method
  let [list, setList] = useState([]);
  const [item, setItem] = useState("");

  const addItem = () => {
    if (item) {
      list.push(item);
      setList([...list]);
      setItem("");
    } else {
      alert("Please enter an input any name!");
    }
  };

  const removeItem = (index) => {
    if (list.length !== 0) {
      list.splice(index, 1);
      setList([...list]);
    } else {
      alert("No data on list!");
    }
  };

  {/* form submission using usestate hook */}
  let [Formobj, setFormobj] = useState({
    name: "",
    email: "",
    city: "Dhaka",
    gender: "Male",
  })

  const InputChange = (property, value)=>{
    setFormobj(prevObj=>({
      ...prevObj,
      [property]:value
    }))
  }

  const FormSubmit= (e)=>{
    e.preventDefault();
    alert(JSON.stringify(Formobj));
    console.log(Formobj);
  }

  return (
    <>
      <Nav />
      <TestForm/>

      
      <div className="container font-semibold text-slate-800 text-xl">
        <div className="flex flex-row justify-center gap-8 my-6">
          <div className="flex flex-col">
            <h4 className="underline mb-4">Conditional Rendering -</h4>
            {/* short cut inline if else conditions */}
            <div>
              {num > 20 ? (
                <p>- Inline condition: Bigger</p>
              ) : (
                <p>- Inline condition: Smaller</p>
              )}
            </div>

            {/* immediately invoked in react */}
            <div>
              {(() => {
                if (num > 10) {
                  return <p>- Auto call in mount: Bigger</p>;
                } else {
                  return <p>- Auto call in mount: Smaller</p>;
                }
              })()}
            </div>
          </div>

          <form onSubmit={DemoFormSubmit}>
            <h4 className="underline mb-4">Form Rendering -</h4>
            <div className="flex flex-row items-center gap-2">
              <input
                type="text"
                className="rounded"
                placeholder="Enter your name"
              />
              <button className="px-2.5 py-1.5 rounded bg-green-400 hover:bg-green-500">
                Submit
              </button>
            </div>
          </form>

          {/* map loop in recat. map fucntions return value on per iteration */}
          <div>
            <h4 className="underline mb-4">Loop Items Rendering -</h4>
            <ul className="w-48 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg">
              {city.map((item, i) => {
                return (
                  <li
                    className="w-full px-4 py-2 border-b border-gray-200"
                    key={i.toString()}
                  >
                    {item}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>

      <hr className="container" />

      <Test
        title="This is props value!"
        item={propsObj}
        btnFunction={btnClick}
      />

      <hr className="container my-6" />

      <div className="container mb-6">
        <h2 className="text-lg font-semibold text-center underline">
          - React Hook UseRef Method Practice -
        </h2>
        <div className="flex justify-center gap-8">
          <div className="border border-indigo-500 rounded p-6 mt-2">
            <p ref={HeadLine} className="text-base font-semibold">Example text...</p>

            {/* without current property using useRef hook. */}
            {/* <p ref={(p) => (HeadLine = p)} className="text-base font-semibold">
              Example text...
            </p> */}
            <button
              onClick={change}
              className="bg-gray-300 px-2 py-1.5 rounded mt-2"
            >
              Change Text
            </button>
          </div>

          <div className="border border-indigo-500 rounded mt-2">
            <div className="flex justify-center items-center gap-6 p-2">
              <button
                className="bg-gray-300 px-2 py-1.5 rounded"
                onClick={fetchData}
              >
                Call API
              </button>
              <button
                className="bg-gray-300 px-2 py-1.5 rounded"
                onClick={showData}
              >
                Show Data
              </button>
            </div>

            {/* Those tags values are from API data which is store in useref hook method. */}
            <p
              ref={(p) => (showStoreData_1 = p)}
              className="px-4 mt-2 text-sm font-semibold"
            ></p>
            <p
              ref={(p) => (showStoreData_2 = p)}
              className="px-4 text-sm font-semibold"
            ></p>
          </div>
        </div>
      </div>

      <hr className="container my-6" />

      <div className="container mb-6">
        <h2 className="text-lg font-semibold text-center underline">
          - React Hook Usestate Method Practice -
        </h2>

        <div className="mt-4 flex justify-center items-center gap-6">
          <div>
            <h4 className="mb-2 text-xl font-bold">Value: {number}</h4>
            <button
              className="bg-gray-300 px-4 py-1.5 rounded hover:bg-gray-500 mr-2"
              onClick={() => setNumber(number++)}
            >
              Increase
            </button>
            <button
              className="bg-gray-300 px-4 py-1.5 rounded hover:bg-gray-500"
              onClick={() => setNumber(number--)}
            >
              Decrease
            </button>
          </div>
          <div>
            <h4 className="mb-2 text-xl font-bold">
              Object Key One: {obj.key1} <br />
              {/* Human: {obj.name} , Age: {obj.age} */}
            </h4>
            <button
              onClick={objChange}
              className="bg-gray-300 px-4 py-1.5 rounded hover:bg-gray-500"
            >
              Change Key Value
            </button>
          </div>
        </div>

        {/* using useState for simple todo app */}
        <hr className="my-4" />
        <h3 className="text-center text-lg font-bold">
          - TODO App using Ract Hook useSate Method -
        </h3>
        <div className="my-8 flex justify-center items-center">
          <input
            type="text"
            placeholder="Add item name"
            className="rounded"
            value={item}
            onChange={(e) => setItem(e.target.value)}
          />
          <button
            onClick={addItem}
            className="bg-gray-500 px-3 py-2 rounded ml-4 hover:bg-gray-700"
          >
            Add
          </button>
        </div>
        <ul className="flex justify-center items-center">
          {list.length ? (
            list.map((item, i) => {
              return (
                <li className="flex items-center mx-2">
                  <p className="text-base font-semibold">{item}</p>
                  <button
                    onClick={() => removeItem(i)}
                    className="bg-red-700 px-2.5 py-1.5 rounded ml-4 hover:bg-red-800"
                  >
                    Delete
                  </button>
                </li>
              );
            })
          ) : (
            <p className="text-base font-semibold">No data available now!</p>
          )}
        </ul>

        {/* form submission using usestate hook */}
        <hr className="my-4" />
        <div className="container">
          <h3 className="text-center text-lg font-bold mb-6">
            - Form Submission App using Ract Hook useSate Method -
          </h3>
          <form onSubmit={FormSubmit} className="max-w-sm mx-auto">
            <div className="flex items-center gap-4">
              <div className="mb-5">
                <label
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your full name
                </label>
                <input
                  type="text"
                  name="name"
                  onChange={(e)=>{InputChange("name", e.target.value)}}
                  value={Formobj.name}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                />
              </div>
              <div className="mb-5">
                <label
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your email address
                </label>
                <input
                  type="email"
                  onChange={(e)=>{InputChange("email", e.target.value)}}
                  value={Formobj.email}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                />
              </div>
            </div>

            <div className="mb-5">
              <label
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Select your city
              </label>
              <select
                onChange={(e)=>{InputChange("city", e.target.value)}}
                value={Formobj.city}
                required
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option value="">Choose city</option>
                <option value="Dhaka">Dhaka</option>
                <option value="London">London</option>
                <option value="Lisbon">Lisbon</option>
              </select>
            </div>

            <div className="flex items-center gap-6">
              <div className="flex items-center mb-4">
                <input
                  type="radio"
                  onChange={()=>{InputChange("gender", "Male")}}
                  checked={Formobj.gender === "Male"}
                  required
                  className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  className="block ms-2  text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Male
                </label>
              </div>

              <div className="flex items-center mb-4">
                <input
                  type="radio"
                  onChange={()=>{InputChange("gender", "Female")}}
                  checked={Formobj.gender === "Female"}
                  required
                  className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  className="block ms-2  text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Female
                </label>
              </div>
            </div>

            <button
              type="submit"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Submit
            </button>
          </form>
        </div>
      </div>

      {/* using reat useeffect hook method */}
      <hr className="my-4" />
      <TestUseEffect/>
    </>
  );
}

export default App;
