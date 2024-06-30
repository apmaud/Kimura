using System.Linq.Expressions;
using backend_csharp.Data;
using backend_csharp.Entities.Models;
using Microsoft.EntityFrameworkCore;

namespace backend_csharp.Repositories.PositionRepository;

public class PositionRepository : IPositionRepository
{
    private DataContext DataContext { get; set; }

    public PositionRepository(DataContext dataContext)
    {
        this.DataContext = dataContext;
    }

    public async Task<IEnumerable<Position>> GetPositions()
    {
        return await DataContext.Positions.ToListAsync();
    }

    public async Task<Position> AddPosition(Position position)
    {
        var result = await DataContext.Positions.AddAsync(position);
        await DataContext.SaveChangesAsync();
        return result.Entity;
    }

    /*public IQueryable<Position> FindAll()
    {
        return DataContext.Set<Position>().AsNoTracking();
    }

    public IQueryable<Position> FindByCondition(Expression<Func<Position, bool>> expression)
    {
        return DataContext.Set<Position>().Where(expression).AsNoTracking();
    }


    public void Create(Position position)
    {
        DataContext.Set<Position>().Add(position);
    }

    public void Update(Position position)
    {
        DataContext.Set<Position>().Update(position);
    }

    public void Delete(Position position)
    {
        DataContext.Set<Position>().Remove(position);
    }*/


}