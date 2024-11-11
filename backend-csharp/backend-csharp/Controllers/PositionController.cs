using System.Runtime.InteropServices;
using AutoMapper;
using backend_csharp.Data;
using backend_csharp.Dto;
using backend_csharp.Entities.Models;
using backend_csharp.Repositories.PositionRepository;
using backend_csharp.Repositories.UserRepository;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.CodeAnalysis.CSharp.Syntax;

namespace backend_csharp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PositionController : ControllerBase
    {
        private IPositionRepository _positionRepository;



        public PositionController(IPositionRepository positionRepository)
        {
            _positionRepository = positionRepository;
        }
        

        [HttpGet("all")]
        public async Task<ActionResult> GetAllPositions()
        {
            try
            {
                return Ok(await _positionRepository.GetAllPositions());
            }
            catch (Exception)
            {
                return StatusCode(500, "Error retrieving from database");
            }
        }
        
        [HttpGet("{userId}")]
        public async Task<ActionResult> GetPositions(int userId)
        {
            try
            {
                return Ok(await _positionRepository.GetPositionsByUserId(userId));
            }
            catch (Exception)
            {
                return StatusCode(500, "Error retrieving from database");
            }
            
        }

        [HttpPost("{userId}")]
        public async Task<IActionResult> AddPosition([FromBody] PositionDto positionDto)
        {
            if (positionDto == null)
            {
                return BadRequest("Position data is required.");
            }
            

            if (HasRelations(positionDto))
            {
                return await AddPositionWithRelations(positionDto);
            }
            
            return await AddPositionWithoutRelations(positionDto);

        }
        
        
        // Helper functions
        
        private bool HasRelations(PositionDto positionDto)
        {
            return positionDto.SourceIds.Count > 0 || positionDto.TargetIds.Count > 0;
        }
        
        private async Task<IActionResult> AddPositionWithRelations(PositionDto positionDto)
        {
            if (!_positionRepository.AddPositionWithEdges(positionDto))
            {
                return ServerError("Error occurred while saving position with relations.");
            }

            return Ok("Successfully added position with relations.");
        }
        
        private async Task<IActionResult> AddPositionWithoutRelations(PositionDto positionDto)
        {
            if (!_positionRepository.AddPosition(positionDto))
            {
                return ServerError("Error occurred while saving position without relations.");
            }

            return Ok("Successfully added position with no relations.");
        }
        
        private IActionResult ServerError(string errorMessage)
        {
            ModelState.AddModelError("", errorMessage);
            return StatusCode(500, ModelState);
        }
    }
}
