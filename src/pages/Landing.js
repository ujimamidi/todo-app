import AddTodo from "../components/AddTodo";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar"

function Landing() {
  return (
    <div className="flex flex-col justify-center text-center">
      <Navbar />
      <AddTodo />
      <Footer />
    </div>
 )
}

export default Landing;