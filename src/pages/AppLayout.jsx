import { Link } from "react-router-dom"
import AppNav from "../components/AppNav"

function AppLayout() {
  return (
    <div>
      <Link to='/'> 👈 Back</Link>
      
      <AppNav />
      <p>App</p>
    </div>
  )
}

export default AppLayout