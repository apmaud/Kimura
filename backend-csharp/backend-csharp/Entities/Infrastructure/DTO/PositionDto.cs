namespace backend_csharp.Dto;

public class PositionDto
{
    public int Id { get; set; }
    public string Name { get; set; }
    public string? Description { get; set; }
    public int UserId { get; set; }
    public List<int> SourceIds { get; set; }
    public List<int> TargetIds { get; set; }
}