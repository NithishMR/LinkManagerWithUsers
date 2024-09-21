function Search() {
  return (
    <>
      <div className=" m-auto pt-6">
        <div className="flex flex-row justify-around">
          <div className="">
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-[500px] "
            />
          </div>
          <div className="">
            <div className="">
              <button className="btn btn-wide">Search</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Search;
