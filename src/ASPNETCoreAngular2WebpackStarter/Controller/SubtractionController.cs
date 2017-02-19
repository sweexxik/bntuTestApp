using ASPNETCoreAngular2Demo.Actions.Subtraction;
using Microsoft.AspNetCore.Mvc;

namespace ASPNETCoreAngular2Demo.Controller
{
    [Route("api/[controller]")]
    public class SubtractionController : Microsoft.AspNetCore.Mvc.Controller
    {
        [HttpPost]
        public IActionResult Post([FromBody]SubtractionRequest request)
        {
            double result = SubtractionHelper.Calculate(request.Arg1, request.Arg2);
            return new JsonResult(result);
        }
    }
}
