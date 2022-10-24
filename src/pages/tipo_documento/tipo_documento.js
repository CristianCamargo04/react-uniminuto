import Menu from "../../components/Layout/Menu/Menu"
import Lista from '../../components/Tipo_documento/List';
import Actions from '../../components/Actions/Actions';
import Footer from "../../components/Layout/Footer/Footer"
import Header from "../../components/Layout/Header/Header"

export default function tipo_documento() {
    return(
        <>
            <Header/>
            <section className="">
                <main className="w-full md:flex flex-wrap">
                    <Menu/>
                    <section className="w-full md:w-10/12 relative">
                        <Actions register="/registrar-tipo-documento" update="/actualizar-tipo-documento" list="/tipo-documento"/>
                        <h1 className="text-2xl py-6 mx-auto px-4">Lista tipos de documentos</h1>
                        <Lista/>
                        <Footer/>
                    </section>
                </main>
            </section>
        </>
    );
}