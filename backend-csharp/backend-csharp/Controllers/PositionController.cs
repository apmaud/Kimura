using backend_csharp.Data;
using backend_csharp.Entities.Models;
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
        private IPositionRepository _repository;

        public PositionController(IPositionRepository repository)
        {
            this._repository = repository;
        }

        [HttpGet]
        public async Task<ActionResult> GetPositions()
        {
            try
            {
                return Ok(await _repository.GetPositions());
            }
            catch (Exception)
            {
                return StatusCode(500, "Error retrieving from database");
            }
        }

        [HttpPost]
        public async Task<ActionResult<Position>> AddPosition(Position position)
        {
            try
            {
                if (position == null)
                {
                    return BadRequest();
                }

                var createdPosition = await _repository.AddPosition(position);

                return createdPosition;
            }
            catch (Exception)
            {
                return StatusCode(500, "Error creating new position record");
            }
        }
        

        /*[HttpGet]
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
        [HttpPost]
        public IActionResult CreatePosition(Position position)
        {
            try
            {
            //    _repository.Create(position);
                Console.Write(position);
                return Ok(position);
                //    return Ok("Success");
            }
            catch (Exception e)
            {
                return StatusCode(500, "Error creating new position record");
            }
        }*/
    
        

    }
}
