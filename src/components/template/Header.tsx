import useAppData from "@/src/data/hook/useAppData"
import BotaoAlternarTema from "./BotaoAlternarTema"
import Title from "./Title"
import AvatarUser from "./AvatarUser"

interface HeaderProps {
    title: string
    subtitle: string
}

export default function Header(props: HeaderProps) {
    const {tema, alternarTema } = useAppData()
    return(
        <div className="flex">
            <Title title={props.title} subtitle={props.subtitle}/>
            <div className="flex flex-grow justify-end items-center">
                <BotaoAlternarTema tema={tema} alternarTema={alternarTema}/>
                <AvatarUser className="ml-3"></AvatarUser>
            </div>
        </div>
    )
}