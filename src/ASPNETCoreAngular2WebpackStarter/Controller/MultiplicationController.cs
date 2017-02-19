using ASPNETCoreAngular2Demo.Actions.Multiplication;
using Microsoft.AspNetCore.Mvc;

namespace ASPNETCoreAngular2Demo.Controller
{
    [Route("api/[controller]")]
    public class MultiplicationController : Microsoft.AspNetCore.Mvc.Controller
    {
        [HttpPost]
        public IActionResult Post([FromBody]MultiplicationRequest request)
        {
            double result = MultiplicationHelper.Calculate(request.Arg1, request.Arg2);
            return new JsonResult(result);
        }
    }
}
