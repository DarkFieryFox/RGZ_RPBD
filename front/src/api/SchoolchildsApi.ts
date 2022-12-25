import {BaseApi} from "./BaseApi";
import {Schoolchilds, SchoolchildsControllerApi} from "./base/api";
import {customFetch} from "./util/customFetch";
import {configuration} from "./util/apiConfiguration";

class SchoolchildsApi implements BaseApi<Schoolchilds>{
    api = new SchoolchildsControllerApi(configuration, configuration.basePath, customFetch);
    create(Schoolchilds: Schoolchilds){
        return this.api.createUsingPOST1(Schoolchilds)
    }
    edit(id: number, Schoolchilds: Schoolchilds) {
        return this.api.editUsingPUT1(id, Schoolchilds)
    }

    findAll(): Promise<Schoolchilds[]> {
        return this.api.getAllSchoolchildsUsingGET()
    }

    delete(id: number): Promise<Response> {
        return this.api.deleteUsingDELETE1(id)
    }
}

export const schoolchildApi = new SchoolchildsApi()