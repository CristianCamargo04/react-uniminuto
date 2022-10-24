import menu from "../../../data/menu.json";

export default function Menu() {
    return(
        <nav className="w-full md:w-2/12 md:min-h-screen text-white">
            <ul className="justify-around flex md:block flex-wrap">
                {menu.menu.map((el) => (
                    <li className="p-3 hover:bg-blue-900 md:my-2">
                        <a className="uppercase w-full flex items-center text-xs font-bold" href={el.url}>
                            <i class={el.ico}></i>
                            <p className="hidden md:block ">{el.name}</p>
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
}