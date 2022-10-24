import Menu from "../../components/Layout/Menu/Menu"
import Lista from '../../components/Tipo_convenio/List';
import Actions from '../../components/Actions/Actions';
import Footer from "../../components/Layout/Footer/Footer"
import Header from "../../components/Layout/Header/Header"

export default function tipo_convenio() {
    return(
        <>
            <Header/>
            <section className="">
                <main className="w-full md:flex flex-wrap">
                    <Menu/>
                    <section className="w-full md:w-10/12 relative">
                        <Actions register="/registrar-tipo-convenio" update="/actualizar-tipo-convenio" list="/tipo-convenio"/>
                        <h1 className="text-2xl py-6 mx-auto px-4">Lista tipos de convenios</h1>
                        <Lista/>
                        <Footer/>
                    </section>
                </main>
            </section>
        </>
    );
}