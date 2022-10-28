import Boom from '@hapi/boom';
import Users from './model';

export async function _findById(req:any, h:any):Promise<any>{
    try {
        return h.response('GET findById').code(200);
    } catch (error) {
        console.log(error);
        return Boom.badImplementation();
    }
}

export async function _getAll(req:any, h:any):Promise<any>{
    try {
        const users = await Users.find({});
        return h.response(`GET getAll ${users}`).code(200);
    } catch (error) {
        console.log(error);
        return Boom.badImplementation();
    }
}

export async function _create(req:any, h:any):Promise<any>{
    try {
        const findEmail = await Users.findOne({
            email: req.payload.email
        });
        if(findEmail){
            return Boom.badRequest('El usuario ya existe');
        }

        const usuario = await new Users(req.payload).save();
        if(!usuario){
            return Boom.badRequest('Algo salio mal. Intenta nuvamente');
        }

        return h.response({_id: usuario._id}).code(200);
    } catch (error) {
        console.log(error);
        return Boom.badImplementation();
    }
}

export async function _edit(req:any, h:any):Promise<any>{
    try {
        return h.response('PUT edit').code(200);
    } catch (error) {
        console.log(error);
        return Boom.badImplementation();
    }
}

export async function _delete(req:any, h:any):Promise<any>{
    try {
        return h.response('DELETE edit').code(200);
    } catch (error) {
        console.log(error);
        return Boom.badImplementation();
    }
}