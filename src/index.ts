import axios from 'axios';
import utils from './utils';
interface StudyRegister {

}
interface Client {
    studyRegister: StudyRegister
}
interface Qldt {
    loginByPassword: (studentCode: string, password: string) => Client
}
function loginByPassword(studentCode: string, password: string): Client {
    let client: Client = {} as Client;

    return client;
}
const qldt: Qldt = {
    loginByPassword
}
export default {
    loginByPassword
};
