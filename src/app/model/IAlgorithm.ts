import { Output } from "./Output";
import { Type } from "../shared/type";

export interface IAlgorithm {
    Name: string;
    UserReadebaleName: string;
    AlgorithmMetaDataParams: Array<[string, Type]>; // <name,type>
    OutputType: Output;
    //OutputParams: Array<IOutputParams>

    // to which project
    // description 
}

