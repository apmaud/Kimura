using System.Linq.Expressions;
using backend_csharp.Data;
using backend_csharp.Entities.Models;
using Microsoft.EntityFrameworkCore;

namespace backend_csharp.Repositories.PositionRepository;

public class PositionRepository : iPositionRepository
{
    private DataContext DataContext { get; set; }

    public PositionRepository(DataContext dataContext)
    {
        DataContext = dataContext;
    }
    
    public IQueryable<Position> FindAll()
    {
        return DataContext.Set<Position>().AsNoTracking();
    }

    public IQueryable<Position> FindByCondition(Expression<Func<Position, bool>> expression)
    {
        return DataContext.Set<Position>().Where(expression).AsNoTracking();
    }

    public void Create(Position entity)
    {
        DataContext.Set<Position>().Add(entity);
    }

    public void Update(Position entity)
    {
        DataContext.Set<Position>().Update(entity);
    }

    public void Delete(Position entity)
    {
        DataContext.Set<Position>().Remove(entity);
    }
}