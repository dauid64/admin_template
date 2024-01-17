import Link from "next/link"

interface MenuItemProps {
    url?: string
    text: string
    icon: any
    className?: string
    onClick?: (evento: any) => void
}

export default function MenuItem(props: MenuItemProps) {
    function renderizarConteudo() {
        return (
            <div className={`
            flex flex-col 
            justify-center items-center
            h-20 w-20 
          dark:text-gray-200 ${props.className}
            `}>
                {props.icon}
                <span className="text-xs font-ligh">
                    {props.text}
                </span>
            </div>
        )
    }
    return (
        <li onClick={props.onClick} className="hover:bg-gray-100 cursor-pointer dark:hover:bg-gray-800">
            {
                props.url ? (
                    <Link href={props.url}>
                        {renderizarConteudo()}
                    </Link>
                ) : (
                    renderizarConteudo()
                )
            }
            
        </li>
    )
}