import { ICommunicationManager } from "./ICommunicationManager";
import { IAlgorithm } from "../model/Algorithm/IAlgorithm";
import { Algorithm } from "../model/Algorithm/Algorithm";
import { IProject } from "../model/IProject";
import { Project } from "../model/project";
import { IAlgorithmOutput } from "../model/Algorithm/IAlgorithmOutput";
import { DummyAlgorithmOutput } from "../model/Algorithm/DummyAlgorithmOutput";
import { AlgorithmOutputType } from "../model/AlgorithmOutputType";
import { Type } from "../shared/type";

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
        for (var _i = 0; _i < 2; _i++) {
            let dummyAlgo = new Algorithm();
            dummyAlgo.UserReadebaleName = "Text Algorithm " + (_i + 1);
            dummyAlgo.AlgorithmMetaDataParams = new Array();
            dummyAlgo.AlgorithmMetaDataParams.push(["AlgorithmMetaDataParamsName", Type.Number]);
            dummyAlgo.OutputType = AlgorithmOutputType.Text;
            algos[_i] = dummyAlgo; 
        }

        for (var _i = 2; _i < 5; _i++) {
            let dummyAlgo = new Algorithm();
            dummyAlgo.UserReadebaleName = "Table Algorithm " + (_i + 1);
            dummyAlgo.AlgorithmMetaDataParams = new Array();
            dummyAlgo.AlgorithmMetaDataParams.push(["AlgorithmMetaDataParamsName", Type.Number]);
            dummyAlgo.OutputType = AlgorithmOutputType.Table;
            algos[_i] = dummyAlgo; 
        }

        for (var _i = 5; _i < 8; _i++) {
            let dummyAlgo = new Algorithm();
            dummyAlgo.UserReadebaleName = "Graph Algorithm " + (_i + 1);
            dummyAlgo.AlgorithmMetaDataParams = new Array();
            dummyAlgo.AlgorithmMetaDataParams.push(["AlgorithmMetaDataParamsName", Type.Number]);
            dummyAlgo.OutputType = AlgorithmOutputType.Graph;
            algos[_i] = dummyAlgo; 
        }
        return algos;    
    }

    activateAlgorithm(algorithm: IAlgorithm): IAlgorithmOutput {
        // todo - dummy implementation - use REST API instead
        if(algorithm.OutputType == AlgorithmOutputType.Text)
            return new DummyAlgorithmOutput([["Dummy Algorithm Result"]]);
        else if (algorithm.OutputType == AlgorithmOutputType.Table)
            return new DummyAlgorithmOutput([  ["header1","header2","header3"], [1,2,3], [1,1,1]]);
        else if (algorithm.OutputType == AlgorithmOutputType.Graph)
            return new DummyAlgorithmOutput([  ["header1","header2","header3"], [1,2,3], [1,1,1]]);
    }
}



