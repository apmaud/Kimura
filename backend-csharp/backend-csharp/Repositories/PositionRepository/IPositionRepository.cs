using System.Linq.Expressions;
using System.Runtime.InteropServices;
using backend_csharp.Dto;
using backend_csharp.Entities.Models;

namespace backend_csharp.Repositories.PositionRepository;

public interface IPositionRepository
{
    Task<IEnumerable<Position>> GetAllPositions();
    Task<Position> GetPositionById(int id);
    Task<IEnumerable<Position>> GetPositionsByUserId(int id);
    Task<IEnumerable<PositionEdge>> GetEdgesByUserId(int id);
    
    bool AddPosition(PositionDto positionDto);

    bool AddPositionWithEdges(PositionDto positionDto);
    
    bool CreateEdge(Position sourcePosition, Position targetPosition);

    bool AddRelationToExistingPosition(PositionEdge positionEdge, Position position);
    
    bool Save();
    

}