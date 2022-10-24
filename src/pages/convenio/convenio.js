import Menu from "../../components/Layout/Menu/Menu"
import List from '../../components/Convenio/List';
import Actions from '../../components/Actions/Actions';
import Footer from "../../components/Layout/Footer/Footer"
import Header from "../../components/Layout/Header/Header"

export default function convenio() {
    return(
        <>
            <Header/>
            <section className="">
                <main className="w-full md:flex flex-wrap">
                    <Menu/>
                    <section className="w-full md:w-10/12 relative">
                        <Actions register="/registrar-convenio" update="/actualizar-convenio" list="/convenio"/>
                        <h1 className="text-2xl py-6 mx-auto px-4">Lista convenios</h1>
                        <List/>
                        <Footer/>
                    </section>
                </main>
            </section>
        </>
    );
}