import {NUEVO_REGISTRO, REGISTRO_FALLIDO} from "../actions/registro/registroActionTypes";

const initialState = {
    uid: null,
    nombre: '',
    error: null
}

const registroReducer = async (state=initialState, {type, payload}) => {
    switch(type){
        case NUEVO_REGISTRO:{
            const response = await registrarUsuario(payload)
            //TODO: Validar errores email duplicado y fallo en conexion 
            return {
                ...state,
                uid: response.uid,
                nombre: response.nombre
            }        
        }
        case REGISTRO_FALLIDO:{
            return {
                ...state,
                error: payload.error
            }
        } 
    }    
}

export default registroReducer