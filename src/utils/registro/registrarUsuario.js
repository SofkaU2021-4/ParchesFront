
const axios = require('axios');
const { useDispatch } = require('react-redux');
const { registroExitoso, registroFallido } = require('../../redux/actions/registro/registroActions');

const URL_API = 'http://localhost:8080' //TODO:actualizar esto

async function registrarUsuario(uid, nombre){
    
    const dispatch = useDispatch()
    
    //TODO: Hacer el registro en firebase
    
    const options = {
        method: 'POST',
        body:{
            uid: uid,
            nombre: nombre
        },
        url: `${URL_API}/registro`,
        headers: { 'Content-Type': 'application/json' }
    }

    await axios.request(options).then((response) => {
        dispatch(registroExitoso(response.json()))
    }).catch((error) => {
        dispatch(registroFallido(error.message))
    })
}