import { useForm } from "react-hook-form";

const TestForm = () => {
  const {
    register,
    handleSubmit,
    setError,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    setError('email', {
        type: 'manual',
        message: 'User already exists with this email.',
      });
    console.log(data)
};

  console.log(watch("name")); // watch input value by passing the name of it

  return (
    <div className="container flex items-center my-6">
      {/* "handleSubmit" will validate your inputs before invoking "onSubmit" */}
      <form onSubmit={handleSubmit(onSubmit)} className="max-w-sm mx-auto flex flex-col gap-2">
        {/* register your input into the hook by invoking the "register" function */}
        <input
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        //   defaultValue="test"
          placeholder="Enter Name:"
          {...register("name", {required:true })}
        />
        {errors.name && <span>This field is required</span>}

        {/* include validation with required or other standard HTML validation rules */}
        <input
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Enter Email:"
          {...register("email", { required: true })}
        />
        {/* errors will return when field validation fails  */}
        <p>{errors.email?.message}</p>

        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default TestForm;
