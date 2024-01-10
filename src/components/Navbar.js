function Navbar() {

	const currentDate = new Date().toDateString();

  return (
    <div className="mt-5 flex flex-row justify-center text-sm space-x-72 p-2 ">
			<p className="font-semibold">todo.</p>
			<p className="italic">{currentDate}</p>
    </div>
  )
}

export default Navbar;