import AddTodo from "../components/AddTodo";
import Navbar from "../components/Navbar"

function Landing() {
  return (
    <div className="flex flex-col justify-center text-center">
      <Navbar />
      <AddTodo />
    </div>
 )
}

export default Landing;