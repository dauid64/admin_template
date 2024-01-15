import { BellIcon, HomeIcon, SettingsIcon } from "../icons"
import Logo from "./Logo"
import MenuItem from "./MenuItem"

export default function SideMenu() {
    return (
        <aside>
            <div className={`
                flex flex-col items-center justify-center
                bg-gradient-to-r from-indigo-500 to-purple-800
                h-20 w-20
            `}>
                <Logo/>
            </div>
            <ul>
                <MenuItem url="/" text="Início" icon={HomeIcon}/>
                <MenuItem url="/ajustes" text="Ajustes" icon={SettingsIcon}/>
                <MenuItem url="/notificacoes" text="Notificações" icon={BellIcon}/>
            </ul>
        </aside>
    )
}