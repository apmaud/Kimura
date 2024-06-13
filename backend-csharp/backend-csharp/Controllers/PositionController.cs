using backend_csharp.Repositories.PositionRepository;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.CodeAnalysis.CSharp.Syntax;

namespace backend_csharp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PositionController : ControllerBase
    {
        private iPositionRepository _repository;

        public PositionController(iPositionRepository repository)
        {
            _repository = repository;
        }

        [HttpGet]
        public IActionResult FindAllPositions()
        {
            try
            {
                var positions = _repository.FindAll();

                return Ok(positions);
            }
            catch (Exception e)
            {
                return StatusCode(500, "Internal server error");
            }
        }
    
        

    }
}
