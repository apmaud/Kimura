using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace backend_csharp.Entities.Models;


[Table("position")]
public class Position
{
    public int Id { get; set; }
    
    [Required(ErrorMessage = "Position name is required")]
    [StringLength(60, ErrorMessage = "Position name can't be longer than 60 characters")]
    public string Name { get; set; }
    
    [StringLength(60, ErrorMessage = "Position description can't be longer than 250 characters")]
    public string? Description { get; set; }

    public List<Position>? Relations { get; } = [];

    public int UserId { get; set; }

}