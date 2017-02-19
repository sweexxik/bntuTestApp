using ASPNETCoreAngular2Demo.Actions.Summation;
using Microsoft.AspNetCore.Mvc;

namespace ASPNETCoreAngular2Demo.Controller
{
    [Route("api/[controller]")]
    public class SummationController : Microsoft.AspNetCore.Mvc.Controller
    {
        [HttpPost]
        public IActionResult Post([FromBody]SummationRequest request)
        {
            double result = SummationHelper.Calculate(request.Arg1, request.Arg2);
            return new JsonResult(result);
        }
    }
}
