import { Observable } from 'rxjs/Observable';

import { IAlgorithm } from '../model/Algorithm/IAlgorithm';
import { IProject } from '../model/IProject';
import { IAlgorithmOutput } from '../model/Algorithm/IAlgorithmOutput';

export interface ICommunicationManager {
    getProjects(): Array<IProject>;
    getAlgorithms(): Observable<IAlgorithm[]>;

    activateAlgorithm(algorithm: IAlgorithm): IAlgorithmOutput;
}

