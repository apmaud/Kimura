using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace backend_csharp.Entities.Models;


[Table("position")]
public class Position
{
    public Guid Id { get; set; }
    
    [Required(ErrorMessage = "Position name is required")]
    [StringLength(60, ErrorMessage = "Position name can't be longer than 60 characters")]
    public string Name { get; set; }
    
    public string? Description { get; set; }
    
    public string[]? Relations { get; set; }

    [ForeignKey(nameof(ApplicationUser))]
    public string UserKey { get; set; } = null!;
    
    public ApplicationUser User { get; set; } = null!;
}