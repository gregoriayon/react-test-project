import React from "react";

const Test = (props) => {
  return (
    <>
      <div className="container flex justify-center gap-8 mt-8">
        <div>
          <h4 className="mt-2 font-semibold underline">
            Props prcatice output:
          </h4>
          <p className=" mt-2">First value: {props.title}</p>
        </div>

        <div>
          <h4 className="mt-2 font-semibold underline">
            Props Object Data Display:
          </h4>
          <div className="ml-4 mt-2">
            <ul>
              <li>- {props.item.name}</li>
              <li>- {props.item["age"]}</li>
              <li>- {props.item["city"]}</li>
            </ul>
          </div>
        </div>

        <div>
          <h4 className="my-2 font-semibold underline">
            Props Function Calling:
          </h4>
          <button
            className="px-2 py-1 bg-slate-400 rounded hover:bg-slate-500"
            onClick={props.btnFunction}
          >
            Click Here
          </button>
        </div>
      </div>
    </>
  );
};

export default Test;
