interface BoxLinkProps {
    titulo: string;
    link: string;
}

export default function BoxLink({
    titulo = "vazio",
    link = "#",
}: BoxLinkProps) {

    const hover: string = "hover:bg-green hover:text-gray-900";
    
    return (
        <a href={link} target="_blank">
            <div className={`w-full h-12 bg-cinza-700 text-white text-xl font-semibold flex items-center justify-center rounded-md ${hover} transition mb-5`}>
                {titulo}
            </div>
        </a>
    );
}
