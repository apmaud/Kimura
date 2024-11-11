using System.Security.Claims;
using backend_csharp.Data;
using backend_csharp.Entities.Infrastructure;
using backend_csharp.Entities.Infrastructure.DTO;
using backend_csharp.Entities.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace backend_csharp.Repositories.UserRepository;


public class UserRepository: IUserRepository
{
    private DataContext DataContext { get; set; }
    private readonly IHttpContextAccessor HttpContext;

    public UserRepository(DataContext dataContext, IHttpContextAccessor httpContext)
    {
        this.DataContext = dataContext;
        HttpContext = httpContext;
    }
    
    public async Task<User> GetUserInfo(/*ClaimsPrincipal claims*/)
    {
        /*string userId = claims.Claims.First(c => c.Type == ClaimTypes.NameIdentifier).Value;*/
        var userId = int.Parse(HttpContext.HttpContext.User.Claims.First(c => c.Type == ClaimTypes.NameIdentifier).Value);
        Console.WriteLine(userId);
        return await DataContext.Users.FindAsync(userId);
    }
    
    

    
}