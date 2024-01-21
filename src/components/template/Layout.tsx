import SideMenu from "./SideMenu"
import Header from "./Header"
import Content from "./Content"
import useAppData from "@/src/data/hook/useAppData"
import ForcarAutenticacao from "../auth/ForcarAutenticacao"

interface LayoutProps {
    title: string
    subtitle: string
    children?: any
}

export default function Layout(props: LayoutProps) {
    const ctx = useAppData()

    return(
        <ForcarAutenticacao>
            <div className={`${ctx.tema} flex h-screen w-screen`}>
                <SideMenu/>
                <div className="flex flex-col w-full p-7 bg-gray-300 dark:bg-gray-800">
                    <Header title={props.title} subtitle={props.subtitle}/>
                    <Content>
                        {props.children}
                    </Content>
                </div>
            </div>
        </ForcarAutenticacao>
    )
}