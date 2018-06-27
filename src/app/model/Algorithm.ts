import { IAlgorithm } from "./IAlgorithm";
import { Output } from "./Output";
import { Type } from "../shared/type";

export class Algorithm implements IAlgorithm {
    Name: string;
    UserReadebaleName: string;
    AlgorithmMetaDataParams: Array<[string, Type]>;
    OutputType: Output;

    constructor()
    { 
      this.Name = "DummyAlgorithmName";
      this.UserReadebaleName = "Dummy Algorithm User Readebale Name";
      this.AlgorithmMetaDataParams = new Array();
      this.OutputType = Output.Text;
    } 
}
