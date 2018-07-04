import { Algorithm } from "./Algorithm";
import { IAlgorithm } from "./IAlgorithm";
import { AlgorithmOutputType } from "../AlgorithmOutputType";
import { Type } from "../../shared/type";

export class DummyAlgorithm extends Algorithm implements IAlgorithm{
    Name: string;
    UserReadebaleName: string;
    AlgorithmMetaDataParams: Array<[string, Type]>; // <name,type>
    OutputType: AlgorithmOutputType;

    constructor()
      { 
        super();
        this.Name = "DummyAlgorithmName";
        this.UserReadebaleName = "Dummy Algorithm User Readebale Name";
        this.AlgorithmMetaDataParams = new Array();
        this.OutputType = AlgorithmOutputType.Text;
      } 
}

