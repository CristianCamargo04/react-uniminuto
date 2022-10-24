import { Route } from "wouter";
import './App.css';
import index from "./pages/index/index"

import cargo from "./pages/cargo/cargo"
import registrar_cargo from "./pages/cargo/register"
import actualizar_cargo from "./pages/cargo/update"

import convenio from "./pages/convenio/convenio"
import registrar_convenio from "./pages/convenio/register"
import actualizar_convenio from "./pages/convenio/update"

import documento_pendiente from "./pages/documento_pendiente/documento_pendiente"
import registrar_documento_pendiente from "./pages/documento_pendiente/register"
import actualizar_documento_pendiente from "./pages/documento_pendiente/update"

import empleado from "./pages/empleado/empleado"
import registrar_empleado from "./pages/empleado/register"
import actualizar_empleado from "./pages/empleado/update"

import empresa from "./pages/empresa/empresa"
import registrar_empresa from "./pages/empresa/register"
import actualizar_empresa from "./pages/empresa/update"

import tipo_convenio from "./pages/tipo_convenio/tipo_convenio"
import registrar_tipo_convenio from "./pages/tipo_convenio/register"
import actualizar_tipo_convenio from "./pages/tipo_convenio/update"

import tipo_documento from "./pages/tipo_documento/tipo_documento"
import registrar_tipo_documento from "./pages/tipo_documento/register"
import actualizar_tipo_documento from "./pages/tipo_documento/update"

export default function App() {
  return (
    <div className="App">
			<Route path="/" component={index} />

			<Route path="/cargo" component={cargo} />
			<Route path="/registrar-cargo" component={registrar_cargo} />
			<Route path="/actualizar-cargo/:id" component={actualizar_cargo} />

			<Route path="/convenio" component={convenio} />
			<Route path="/registrar-convenio" component={registrar_convenio} />
			<Route path="/actualizar-convenio" component={actualizar_convenio} />

			<Route path="/documento-pendiente" component={documento_pendiente} />
			<Route path="/registrar-documento-pendiente" component={registrar_documento_pendiente} />
			<Route path="/actualizar-documento-pendiente" component={actualizar_documento_pendiente} />

			<Route path="/empleado" component={empleado} />
			<Route path="/registrar-empleado" component={registrar_empleado} />
			<Route path="/actualizar-empleado" component={actualizar_empleado} />
			
			<Route path="/empresa" component={empresa} />
			<Route path="/registrar-empresa" component={registrar_empresa} />
			<Route path="/actualizar-empresa" component={actualizar_empresa} />
						
			<Route path="/tipo-convenio" component={tipo_convenio} />
			<Route path="/registrar-tipo-convenio" component={registrar_tipo_convenio} />
			<Route path="/actualizar-tipo-convenio/:id" component={actualizar_tipo_convenio} />

			<Route path="/tipo-documento" component={tipo_documento} />
			<Route path="/registrar-tipo-documento" component={registrar_tipo_documento} />
			<Route path="/actualizar-tipo-documento" component={actualizar_tipo_documento} />
		</div>
  );
}

