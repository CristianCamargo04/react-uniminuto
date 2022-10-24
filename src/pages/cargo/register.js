import Menu from "../../components/Layout/Menu/Menu"
import Register from '../../components/Cargo/Register';
import Actions from '../../components/Actions/Actions';
import Footer from "../../components/Layout/Footer/Footer"
import Header from "../../components/Layout/Header/Header"

export default function register() {
    return(
        <>
            <Header/>
            <section className="">
                <main className="w-full md:flex flex-wrap">
                    <Menu/>
                    <section className="w-full md:w-10/12 relative">
                        <Actions register="/registrar-cargo" update="/actualizar-cargo" list="/cargo"/>
                        <Register/>
                        <Footer/>
                    </section>
                </main>
            </section>
        </>
    );
}