import Menu from "../../components/Layout/Menu/Menu"
import List from '../../components/Empresa/List';
import Actions from '../../components/Actions/Actions';
import Footer from "../../components/Layout/Footer/Footer"
import Header from "../../components/Layout/Header/Header"

export default function empresa() {
    return(
        <>
            <Header />
            <section className="">
                <main className="w-full md:flex flex-wrap">
                    <Menu/>
                    <section className="w-full md:w-10/12 relative">
                        <Actions register="/registrar-empresa" update="/actualizar-empresa" list="/empresa"/>
                        <h1 className="text-2xl py-6 mx-auto px-4">Lista de empresas</h1>
                        <List/>
                        <Footer/>
                    </section>
                </main>
            </section>
        </>
    );
}