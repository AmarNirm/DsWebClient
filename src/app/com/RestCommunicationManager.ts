import { ICommunicationManager } from "./ICommunicationManager";
import { IAlgorithm } from "../model/IAlgorithm";
import { Algorithm } from "../model/Algorithm";
import { IProject } from "../model/IProject";
import { Project } from "../model/project";

export class RestCommunicationManager implements ICommunicationManager {
    
    getProjects(): IProject[] {
        // todo - dummy implementation - use REST API instead
        let nir = new Array<IProject>();
        let dummyProj = new Project();
        dummyProj.UserReadebaleName = "AlgorithmName";
        dummyProj.DbAddress = "DbAddress";
        nir.push(dummyProj);
        return nir;        
    }

    getAlgorithms(): IAlgorithm[] {
        // todo - dummy implementation - use REST API instead
        let nir = new Array<IAlgorithm>();
        let dummyAlgo = new Algorithm();
        dummyAlgo.UserReadebaleName = "AlgorithmName";
        dummyAlgo.AlgorithmMetaDataParams = [["AlgorithmMetaDataParamsName", Type.Number]];
        dummyAlgo.OutputType = Output.Text;
        nir.push(dummyAlgo);
        return nir;    
    }
}



