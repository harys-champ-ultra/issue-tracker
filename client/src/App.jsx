import { AiFillBug } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { BrowserRouter, Link, Router } from 'react-router-dom'

const App = () => {
    return (
        <>
            <BrowserRouter>

                <header className="border-b bg-slate-100">
                    <nav className="py-4 px-6 md:px-12 lg:px-18 xl:px-24 flex items-center justify-between">
                        <ul className="flex items-center gap-4 md:gap-6 lg:gap-8 font-normal">
                            <li><Link to="/"><AiFillBug /></Link></li>
                            <li><Link to="/">Dashboard</Link></li>
                            <li><Link to="/issues">Issues</Link></li>
                        </ul>
                        <ul>
                            <li><Link to="/profile"><AiOutlineUser /></Link></li>
                        </ul>
                    </nav>
                </header>
            </BrowserRouter>

            <div className="max-w-md my-4 mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
                <div className="md:flex">
                    <div className="md:shrink-0">
                        <img className="h-48 w-full object-cover md:h-full md:w-48" src="/img/building.jpg" alt="Modern building architecture" />
                    </div>
                    <div className="p-8">
                        <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Company retreats</div>
                        <a href="#" className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">Incredible accommodation for your team</a>
                        <p className="mt-2 text-slate-500">Looking to take your team away on a retreat to enjoy awesome food and take in some sunshine? We have a list of places to do just that.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default App