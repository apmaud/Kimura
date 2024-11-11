using System.Security.Claims;
using backend_csharp.Data;
using backend_csharp.Entities.Infrastructure;
using backend_csharp.Entities.Infrastructure.DTO;
using backend_csharp.Entities.Models;
using Microsoft.AspNetCore.Mvc;

namespace backend_csharp.Repositories.UserRepository;

public interface IUserRepository
{
    Task<User> GetUserInfo(/*ClaimsPrincipal claims*/);
    
}