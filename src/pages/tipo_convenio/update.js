import Menu from "../../components/Layout/Menu/Menu"
import Update from '../../components/Tipo_convenio/Update';
import Actions from '../../components/Actions/Actions';
import Footer from "../../components/Layout/Footer/Footer"
import Header from "../../components/Layout/Header/Header"

export default function update() {
    return(
        <>
            <Header/>
            <section className="">
                <main className="w-full md:flex flex-wrap">
                    <Menu/>
                    <section className="w-full md:w-10/12 relative">
                        <Actions register="/registrar-tipo-convenio" update="/actualizar-tipo-convenio" list="/tipo-convenio"/>
                        <Update/>
                        <Footer/>
                    </section>
                </main>
            </section>
        </>
    );
}