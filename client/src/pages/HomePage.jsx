import { Link } from "react-router-dom"

function HomePage() {
  return (
    <div className="hero min-h-screen rounded-md" style={{backgroundImage: 'url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)'}}>
    <div className="hero-overlay bg-opacity-60"></div>
    <div className="hero-content text-center text-neutral-content">
      <div className="max-w-md">
        <h1 className="mb-5 text-5xl font-bold text-slate-100 pb-3">¡Welcome to your tasks manager!</h1>
        <Link to={"/login"} className="bg-indigo-600 hover:bg-indigo-500 p-3 rounded-md text-slate-100">Get Started</Link>
      </div>
    </div>
  </div>
  )
}

export default HomePage