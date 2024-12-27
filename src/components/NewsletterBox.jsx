function NewsletterBox() {
  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log();
  };
  return (
    <div className="text-center">
      <p className="text-2xl font-medium text-gray-800 ">
        Subscribe now & get 10% off
      </p>
      <p className="text-gray-400 m-3">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam,
        ullam.
      </p>
      <form
        onSubmit={onSubmitHandler}
        className="w-full sm:w-1/2 flex items-center  gap-3 mx-auto my-6 py-4"
      >
        <input
          className="w-full border text-sm rounded-md bg-slate-100 px-10 py-4 sm:flex-1 outline-none"
          type="email"
          placeholder="Enter Your Email"
        />
        <button
          type="submit"
          className="bg-slate-900 rounded-md text-white text-sm px-10 py-4"
        >
          SUBSCRIBE
        </button>
      </form>
    </div>
  );
}

export default NewsletterBox;
