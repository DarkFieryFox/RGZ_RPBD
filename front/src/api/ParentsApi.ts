import {BaseApi} from "./BaseApi";
import {Parents, ParentsControllerApi} from "./base/api";
import {customFetch} from "./util/customFetch";
import {configuration} from "./util/apiConfiguration";

class ParentsApi implements BaseApi<Parents>{
    api = new ParentsControllerApi(configuration, configuration.basePath, customFetch);
    create(entity: Parents): Promise<Parents> {
        return this.api.createUsingPOST2(entity)
    }

    edit(id: number, entity: Parents): Promise<Parents> {
        return this.api.editUsingPUT2(id, entity)
    }

    findAll(): Promise<Parents[]> {
        return this.api.getAllParentsUsingGET()
    }

    delete(id: number): Promise<Response> {
        return this.api.deleteUsingDELETE2(id)
    }
}

export const parentApi = new ParentsApi()