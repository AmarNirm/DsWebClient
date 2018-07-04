import { IAlgorithm } from "./IAlgorithm";
import { AlgorithmOutputType } from "../AlgorithmOutputType";
import { Type } from "../../shared/type";

export class Algorithm implements IAlgorithm {
    Name: string;
    UserReadebaleName: string;
    AlgorithmMetaDataParams: Array<[string, Type]>;
    OutputType: AlgorithmOutputType;

    constructor()
    { 
      this.Name = "DummyAlgorithmName";
      this.UserReadebaleName = "Dummy Algorithm User Readebale Name";
      this.AlgorithmMetaDataParams = new Array();
      this.OutputType = AlgorithmOutputType.Text;
    } 
}
