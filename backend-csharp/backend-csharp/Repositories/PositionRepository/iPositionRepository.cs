using System.Linq.Expressions;
using backend_csharp.Entities.Models;

namespace backend_csharp.Repositories.PositionRepository;

public interface iPositionRepository
{
    IQueryable<Position> FindAll();
    IQueryable<Position> FindByCondition(Expression<Func<Position, bool>> expression);
    void Create(Position entity);
    void Update(Position entity);
    void Delete(Position entity);

}