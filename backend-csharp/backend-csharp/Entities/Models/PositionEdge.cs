using System.ComponentModel.DataAnnotations.Schema;

namespace backend_csharp.Entities.Models;


[Table("PositionEdges")]
public class PositionEdge
{
    public int Id { get; set; }

//    public DateTime DateTimeCreated { get; } = new DateTime();

    public int SourceId { get; set; }
    public int TargetId { get; set; }
    
    public Position SourcePosition { get; set; }
    public Position TargetPosition { get; set; }
    
    public int UserId { get; set; }
    
    public User ApplicationUser { get; set; }
}