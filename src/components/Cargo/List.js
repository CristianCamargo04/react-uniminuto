import React, { useState, useEffect } from 'react';
import { Link } from "wouter"
import swal from 'sweetalert';

export default function List() {

  const [cargos, setCargos] = useState([]);
  
  const eliminar = async(id) => {
    let url = 'http://localhost:4000/api/cargos/'+id,
    config = {
      method: 'DELETE', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: 'follow', // manual, *follow, error
      referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    },
    res = await fetch(url,config),
    result = await res.json();
    if(result.errors){
      let text = '';
      result.errors.map(error =>{
        text += error.msg+"\n"
      });
      await swal({
        icon: 'error',
        title: 'No se pudo eliminar',
        text,
      });
    }
    if (result.msg) {
      await swal({
        icon: 'success',
        title: result.msg,
      });
      const nuevaLista = cargos.filter((item) => item.carg_id !== id);
      setCargos(nuevaLista);
    }
  }

  useEffect(()=>{
    const getCargos = async (url) =>{
        let res = await fetch(url),
        data = await res.json();
        data.cargos.forEach( async (el) =>{
          let cargo = {
            carg_id: el.carg_id,
            carg_nombre: el.carg_nombre,
          };
          setCargos((cargos) => [...cargos,cargo]);
        });
    }
    getCargos('http://localhost:4000/api/cargos');
  },[]);

  return (
    <div className="flex flex-col min-h-12 px-4">
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Identificador 
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Nombre
                  </th>
                  
                  <th scope="col" className="relative px-6 py-3">
                    <span className="sr-only">Acciones</span>
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
              {cargos.length === 0?(
                <h3>Cargando...</h3>
              ):(
                cargos.map((el) => (
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">
                            {el.carg_id}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{el.carg_nombre}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <Link href={"/actualizar-cargo/"+el.carg_id}>
                        <a className="text-red-600 hover:text-red-900">
                          <i className="fas fa-edit"></i>
                        </a>
                      </Link>
                      <a className="ml-1 text-red-600 hover:text-red-900" onClick={()=>eliminar(el.carg_id)}>
                        <i className="fas fa-trash"></i>
                      </a>
                    </td>
                  </tr>
                ))
              )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
