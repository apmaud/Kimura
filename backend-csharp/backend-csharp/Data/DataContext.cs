
using backend_csharp.Entities.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;

namespace backend_csharp.Data;

                

public class DataContext : IdentityDbContext<ApplicationUser, IdentityRole<string>, string>
{
    public DataContext(DbContextOptions<DataContext> options): base(options)
    {
    }
    
    public DbSet<Position> Positions { get; set; }
    
}