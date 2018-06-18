import { ICommunicationManager } from "./ICommunicationManager";
import { IAlgorithm } from "../model/IAlgorithm";
import { Algorithm } from "../model/Algorithm";
import { IProject } from "../model/IProject";
import { Project } from "../model/project";

export class RestCommunicationManager implements ICommunicationManager {
    
    getProjects(): IProject[] {
        // todo - dummy implementation - use REST API instead
        var mostUsedProjects = new Array<IProject>(8); // array size - 8 thumenails
        for (var _i = 0; _i < mostUsedProjects.length; _i++) {
            let dummyProj = new Project();
            dummyProj.UserReadebaleName = "Project " + (_i + 1);
            dummyProj.DbAddress = "DbAddress";
            dummyProj.OptionalPicturePath = "assets/project1.png";
            mostUsedProjects[_i] = dummyProj;
        }
        return mostUsedProjects;        
    }

    getAlgorithms(): IAlgorithm[] {
        // todo - dummy implementation - use REST API instead
        var algos = new Array<IAlgorithm>(); 
        for (var _i = 0; _i < 8; _i++) {
            let dummyAlgo = new Algorithm();
            dummyAlgo.UserReadebaleName = "Algorithm " + (_i + 1);
            dummyAlgo.AlgorithmMetaDataParams = [["AlgorithmMetaDataParamsName", Type.Number]];
            dummyAlgo.OutputType = Output.Text;
            algos[_i] = dummyAlgo;
        }
        return algos;    
    }
}



