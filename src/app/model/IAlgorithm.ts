export interface IAlgorithm {
    UserReadebaleName: string;
    AlgorithmMetaDataParams: Array<[string, Type]>; // <name,type>
    OutputType: Output;
    //OutputParams: Array<IOutputParams>
}

