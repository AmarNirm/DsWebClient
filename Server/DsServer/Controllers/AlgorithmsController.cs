using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DsServer.Models;
using Microsoft.AspNetCore.Mvc;
using Type = DsServer.Utils.Type;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace DsServer.Controllers
{
    [Route("api/[controller]")]
    public class AlgorithmsController : Controller
    {
        // GET: api/<controller>
        [HttpGet]
        public IEnumerable<Algorithm> Get()
        {
            Algorithm[] GetFromDbAlgorithms = new Algorithm[8];
            for (int i = 0; i < 2; i++)
            {
                var dummyAlgo = new Algorithm();
                dummyAlgo.UserReadebaleName = "Text Algorithm " + (i + 1);
                dummyAlgo.AlgorithmMetaDataParams = new Tuple<string, Type.TypeEnum>[1];
                dummyAlgo.AlgorithmMetaDataParams[0] = new Tuple<string, Utils.Type.TypeEnum>("AlgorithmMetaDataParamsName", Utils.Type.TypeEnum.Number);
                dummyAlgo.OutputType = AlgorithmOutputType.AlgorithmOutputTypeEnum.Text;
                GetFromDbAlgorithms[i] = dummyAlgo;
            }

            for (int i = 2; i < 5; i++)
            {
                var dummyAlgo = new Algorithm();
                dummyAlgo.UserReadebaleName = "Table Algorithm " + (i + 1);
                dummyAlgo.AlgorithmMetaDataParams = new Tuple<string, Type.TypeEnum>[1];
                dummyAlgo.AlgorithmMetaDataParams[0] = new Tuple<string, Utils.Type.TypeEnum>("AlgorithmMetaDataParamsName", Utils.Type.TypeEnum.Number);
                dummyAlgo.OutputType = AlgorithmOutputType.AlgorithmOutputTypeEnum.Table;
                GetFromDbAlgorithms[i] = dummyAlgo;
            }


            for (int i = 5; i < 8; i++)
            {
                var dummyAlgo = new Algorithm();
                dummyAlgo.UserReadebaleName = "Graph Algorithm " + (i + 1);
                dummyAlgo.AlgorithmMetaDataParams = new Tuple<string, Type.TypeEnum>[1];
                dummyAlgo.AlgorithmMetaDataParams[0] = new Tuple<string, Utils.Type.TypeEnum>("AlgorithmMetaDataParamsName", Utils.Type.TypeEnum.Number);
                dummyAlgo.OutputType = AlgorithmOutputType.AlgorithmOutputTypeEnum.Graph;
                GetFromDbAlgorithms[i] = dummyAlgo;
            }


            return GetFromDbAlgorithms;
        }

        //// GET api/<controller>/5
        //[HttpGet("{id}")]
        //public string Get(int id)
        //{
        //    return "value";
        //}

        //// POST api/<controller>
        //[HttpPost]
        //public void Post([FromBody]string value)
        //{
        //}

        //// PUT api/<controller>/5
        //[HttpPut("{id}")]
        //public void Put(int id, [FromBody]string value)
        //{
        //}

        //// DELETE api/<controller>/5
        //[HttpDelete("{id}")]
        //public void Delete(int id)
        //{
        //}
    }
}
