using System.Security.Claims;
using backend_csharp.Entities.Models;
using backend_csharp.Repositories.UserRepository;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace backend_csharp.Controllers;


[ApiController]
[Route("api/[controller]")]
[Authorize]
public class UserController : ControllerBase
{
    private IUserRepository _userRepository;
    
    public UserController(IUserRepository userRepository)
    {
        _userRepository = userRepository;
    }
    
    [HttpGet("userinfo")]
    public async Task<User> GetUserInfo()
    {
        return await _userRepository.GetUserInfo();
    }
    
    
}