import { BellIcon, HomeIcon, SettingsIcon } from "../icons"
import MenuItem from "./MenuItem"

export default function SideMenu() {
    return (
        <aside>
            <ul>
                <MenuItem url="/" text="Início" icon={HomeIcon}/>
                <MenuItem url="/ajustes" text="Ajustes" icon={SettingsIcon}/>
                <MenuItem url="/notificacoes" text="Notificações" icon={BellIcon}/>
            </ul>
        </aside>
    )
}