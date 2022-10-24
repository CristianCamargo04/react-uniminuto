export default function Actions(props) {
    return(
        <section className="w-full bg-blue-100">
            <article className="w-11/12 mx-auto py-8 sm:flex flex-wrap">
                <div className="rounded-md px-8 py-6 bg-blue-200">
                    <a className="bg-uniminuto text-white font-medium rounded-md transform hover:scale-110 duration-200 flex items-center justify-center h-10 px-4" href={props.register}>Registrar</a>
                </div>
                {/* <div className="rounded-md px-8 py-6 bg-blue-200">
                    <a className="bg-uniminuto text-white font-medium rounded-md transform hover:scale-110 duration-200 flex items-center justify-center h-10 px-4" href={props.update}>Actualizar</a>
                </div> */}
                <div className="mt-4 sm:mt-0 rounded-md px-8 py-6 bg-blue-200 sm:ml-12">
                    <a className="bg-uniminuto text-white font-medium rounded-md transform hover:scale-110 duration-200 flex items-center justify-center h-10 px-4" href={props.list}>Lista</a>
                </div>
            </article>
        </section>
    );
}