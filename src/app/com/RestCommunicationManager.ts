import { ICommunicationManager } from './ICommunicationManager';
import { IAlgorithm } from '../model/Algorithm/IAlgorithm';
import { Algorithm } from '../model/Algorithm/Algorithm';
import { IProject } from '../model/IProject';
import { Project } from '../model/project';
import { IAlgorithmOutput } from '../model/Algorithm/IAlgorithmOutput';
import { DummyAlgorithmOutput } from '../model/Algorithm/DummyAlgorithmOutput';
import { AlgorithmOutputType } from '../model/AlgorithmOutputType';
import { Type } from '../shared/type';

export class RestCommunicationManager implements ICommunicationManager {

    getProjects(): IProject[] {
        // todo - dummy implementation - use REST API instead
        const mostUsedProjects = new Array<IProject>(8); // array size - 8 thumenails
        for (let _i = 0; _i < mostUsedProjects.length; _i++) {
            const dummyProj = new Project();
            dummyProj.UserReadebaleName = 'Project ' + (_i + 1);
            dummyProj.DbAddress = 'DbAddress';
            dummyProj.OptionalPicturePath = 'assets/project1.png';
            mostUsedProjects[_i] = dummyProj;
        }
        return mostUsedProjects;
    }

    getAlgorithms(): IAlgorithm[] {
        // todo - dummy implementation - use REST API instead
        const algos = new Array<IAlgorithm>();
        for (let _i = 0; _i < 2; _i++) {
            const dummyAlgo = new Algorithm();
            dummyAlgo.UserReadebaleName = 'Text Algorithm ' + (_i + 1);
            dummyAlgo.AlgorithmMetaDataParams = new Array();
            dummyAlgo.AlgorithmMetaDataParams.push(['AlgorithmMetaDataParamsName', Type.Number]);
            dummyAlgo.OutputType = AlgorithmOutputType.Text;
            algos[_i] = dummyAlgo;
        }

        for (let _i = 2; _i < 5; _i++) {
            const dummyAlgo = new Algorithm();
            dummyAlgo.UserReadebaleName = 'Table Algorithm ' + (_i + 1);
            dummyAlgo.AlgorithmMetaDataParams = new Array();
            dummyAlgo.AlgorithmMetaDataParams.push(['AlgorithmMetaDataParamsName', Type.Number]);
            dummyAlgo.OutputType = AlgorithmOutputType.Table;
            algos[_i] = dummyAlgo;
        }

        for (let _i = 5; _i < 8; _i++) {
            const dummyAlgo = new Algorithm();
            dummyAlgo.UserReadebaleName = 'Graph Algorithm ' + (_i + 1);
            dummyAlgo.AlgorithmMetaDataParams = new Array();
            dummyAlgo.AlgorithmMetaDataParams.push(['AlgorithmMetaDataParamsName', Type.Number]);
            dummyAlgo.OutputType = AlgorithmOutputType.Graph;
            algos[_i] = dummyAlgo;
        }
        return algos;
    }

    activateAlgorithm(algorithm: IAlgorithm): IAlgorithmOutput {
        // todo - dummy implementation - use REST API instead
        if (algorithm.OutputType === AlgorithmOutputType.Text) {
            return new DummyAlgorithmOutput([['Algorithm Result: 42 !']]);

        } else if (algorithm.OutputType === AlgorithmOutputType.Table) {
            return new DummyAlgorithmOutput([  ['header1', 'header2', 'header3'], [1, 2, 3], [7, 8, 9],
             [7, 8, 9], [7, 8, 9], [7, 8, 9], [7, 8, 9], [7, 8, 9], [7, 8, 9], [7, 8, 9]]);

        } else if (algorithm.OutputType === AlgorithmOutputType.Graph) {
            return new DummyAlgorithmOutput([  ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                ['Series A'], [65, 59, 80, 81, 56, 55, 40],
                ['Series B'], [28, 48, 40, 19, 86, 27, 90],
                ['Series C'], [18, 48, 77, 9, 100, 27, 40],
                ]);
        }
    }
}



