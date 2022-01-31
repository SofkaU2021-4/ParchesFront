import {NUEVO_REGISTRO, REGISTRO_FALLIDO} from "./registroActionTypes"

export const registroExitoso = (uid, nombre) => {
    return {
        type:NUEVO_REGISTRO,
        payload: {
            uid: uid,
            nombre: nombre
        }
    }
}

//Tal vez enviar un mensaje registroFallido = (msg) => {//code}
export const registroFallido = (msg) => {
    return {
        type: REGISTRO_FALLIDO,
        payload: {
            error: msg
        }
    }
}