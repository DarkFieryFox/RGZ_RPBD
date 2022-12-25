import {BaseApi} from "./BaseApi";
import {Progress, ProgressControllerApi} from "./base/api";
import {customFetch} from "./util/customFetch";
import {configuration} from "./util/apiConfiguration";

class ProgressApi implements BaseApi<Progress>{
    api = new ProgressControllerApi(configuration, configuration.basePath, customFetch);

    create(entity: Progress): Promise<Progress> {
        return this.api.createUsingPOST5(entity)
    }

    edit(id: number, entity: Progress): Promise<Progress> {
        return this.api.editUsingPUT5(id, entity)
    }

    findAll(): Promise<Progress[]> {
        return this.api.getAllProgressUsingGET1()
    }

    delete(id: number): Promise<Response> {
        return this.api.deleteUsingDELETE5(id)
    }
}

export const progressApi = new ProgressApi()