import { Outlet } from "react-router";
import Header from "@/components/Layout/Header"

const MainLayout = () => {
    return (
        <div className="min-h-screen bg-zinc-950 text-slate-100">
        <Header />
        <main>
            <Outlet />
        </main>
        </div>
    )
}

export default MainLayout