using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Type = DsServer.Utils.Type;

namespace DsServer.Models
{
    public class Algorithm
    {
        public string Name { get; set; }
        public string UserReadebaleName { get; set; }
        public Tuple<string, Type.TypeEnum>[] AlgorithmMetaDataParams { get; set; }
        public AlgorithmOutputType.AlgorithmOutputTypeEnum OutputType { get; set; }
    }
}
