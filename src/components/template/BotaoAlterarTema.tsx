import { IconMoon, IconSun } from "../icons";

interface BotaoAlterarTemaProps {
    tema: string
    alterarTema: () => void
}

export default function BotaoAlterarTema(props: BotaoAlterarTemaProps) {

    function renderLight() {
        return (
            <div onClick={props.alterarTema}
                className={` 
                    hidden sm:flex items-center cursor-pointer
                    bg-gradient-to-r from-yellow-300 to-yellow-600
                    w-14 lg:w-24 h-8 p-1 
                    rounded-full
                `}
            >
                <div className={`
                    flex items-center justify-center
                    bg-white text-yellow-600
                    w-6 h-6 rounded-full
                `}>
                    {IconSun(4)}
                </div>
                <div className={`
                    hidden lg:flex items-center ml-3
                    text-white
                `}>
                    <span className="text-sm">Claro</span>
                </div>
            </div>
        )
    }

    function renderDark() {
        return (
            <div onClick={props.alterarTema}
                className={`
                    hidden sm:flex items-center cursor-pointer justify-end
                    bg-gradient-to-r from-gray-500 to-gray-900
                    w-14 lg:w-24 h-8 p-1 
                    rounded-full
                `}
            >
                <div className={`
                    hidden lg:flex items-center mr-2
                    text-gray-300
                `}>
                    <span className="text-sm">Escuro</span>
                </div>
                <div className={`
                    flex items-center justify-center
                    bg-black text-yellow-300
                    w-6 h-6 rounded-full
                `}>
                    {IconMoon(4)}
                </div>

            </div>
        )
    }

    return (
        props.tema === 'dark' ? renderLight() : renderDark()
    );
}