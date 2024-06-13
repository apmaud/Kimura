using System.ComponentModel.DataAnnotations;
using System.Data.Odbc;
using Microsoft.AspNetCore.Identity;

namespace backend_csharp.Entities.Models;

public class ApplicationUser : IdentityUser
{
    [PersonalData]
    [StringLength(60, ErrorMessage = "Name can't be longer than 60 characters")]
    public string? Name { get; set; }

    [PersonalData]
    public ICollection<Position> Positions { get; } = new List<Position>();
}