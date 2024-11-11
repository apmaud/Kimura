using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Data.Odbc;
using Microsoft.AspNetCore.Identity;
    
namespace backend_csharp.Entities.Models;

public class User : IdentityUser<int>
{
    public string? FirstName { get; set; }
    public string? LastName { get; set; }
    public ICollection<Position> Positions { get; set; }
    public ICollection<PositionEdge> PositionEdges { get; set; }

}