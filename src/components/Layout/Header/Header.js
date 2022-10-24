export default function Header() {
    return(
        <header className="mx-auto w-full py-2 border-b-2 border-yellow-400 flex items-center">
            <a href="/">
                <img className="w-60 pl-2 mr-4" src="https://www.uniminuto.edu/sites/default/files/uniminuto.png" />
            </a>
            <p className="leading-5 flex items-center h-10 pl-1 md:pl-4 border-l-2 md:border-l-4 border-white text-white uppercase font-semibold text-lg md:text-xl">Centro progresa</p>
        </header>
    );
}