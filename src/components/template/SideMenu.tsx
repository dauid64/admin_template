import useAuth from "@/src/data/hook/useAuth"
import { BellIcon, HomeIcon, LogoutIcon, SettingsIcon } from "../icons"
import Logo from "./Logo"
import MenuItem from "./MenuItem"

export default function SideMenu() {
    const { logout } = useAuth()
    return (
        <aside className="flex flex-col bg-gray-200 text-gray-700  dark:bg-gray-900 ">
            <div className={`
                flex flex-col items-center justify-center
                bg-gradient-to-r from-indigo-500 to-purple-800
                h-20 w-20
            `}>
                <Logo/>
            </div>
            <ul className="flex-grow">
                <MenuItem url="/" text="Início" icon={HomeIcon}/>
                <MenuItem url="/ajustes" text="Ajustes" icon={SettingsIcon}/>
                <MenuItem url="/notificacoes" text="Notificações" icon={BellIcon}/>
            </ul>
            <ul>
                <MenuItem text="Sair" icon={LogoutIcon}
                    onClick={logout}
                    className="text-red-600 dark:text-red-400 hover:bg-red-400 dark:hover:text-white hover:text-white"    
                />
            </ul>
        </aside>
    )
}