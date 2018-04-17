import { IAlgorithm } from "./IAlgorithm";

export class Algorithm implements IAlgorithm {
    UserReadebaleName: string;
    AlgorithmMetaDataParams: [string, Type][];
    OutputType: Output;
}
