import { AlgorithmOutputType } from '../AlgorithmOutputType';
import { Type } from '../../shared/type';

export interface IAlgorithm {
    Name: string;
    UserReadebaleName: string;
    AlgorithmMetaDataParams: Array<[string, Type]>; // <name,type>
    OutputType: AlgorithmOutputType;
    // OutputParams: Array<IOutputParams>

    // to which project
    // description
}

