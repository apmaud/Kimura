using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace backend_csharp.Entities.Models;


[Table("Positions")]
public class Position
{
    public int Id { get; set; }
    
    [Required(ErrorMessage = "Position name is required")]
    [StringLength(60, ErrorMessage = "Position name can't be longer than 60 characters")]
    public string Name { get; set; }
    
    [Required]
    [StringLength(60, ErrorMessage = "Position description can't be longer than 250 characters")]
    public string Description { get; set; }

    /*public ICollection<Position> RelatedPositions { get; } = [];*/
    
    public ICollection<PositionEdge> Targets { get; set; }
    
    public ICollection<PositionEdge> Sources { get; set; }
    
    public int UserId { get; set; }
    
    public User User { get; set; }

}