using System.Linq.Expressions;
using backend_csharp.Entities.Models;

namespace backend_csharp.Repositories.PositionRepository;

public interface IPositionRepository
{
    Task<IEnumerable<Position>> GetPositions();

    Task<Position> AddPosition(Position position);

    /*IQueryable<Position> FindAll();
    IQueryable<Position> FindByCondition(Expression<Func<Position, bool>> expression);
    void Create(Position position);
    void Update(Position position);
    void Delete(Position position);*/

}