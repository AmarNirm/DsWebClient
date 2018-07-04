import { IAlgorithmOutput } from "./IAlgorithmOutput";

export class DummyAlgorithmOutput implements IAlgorithmOutput{

    Output: any[][];

    constructor(output?: any[][])
    {
      if(output)
      {  
        this.Output = output;
      }
      else
      {
        //todo delete - dummy
        this.Output = [[1,2,3], [1,1,1]];
      }
    } 
    
}

