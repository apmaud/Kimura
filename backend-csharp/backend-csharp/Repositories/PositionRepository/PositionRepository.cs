using System.Linq.Expressions;
using System.Runtime.InteropServices;
using backend_csharp.Data;
using backend_csharp.Dto;
using backend_csharp.Entities.Models;
using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.CodeAnalysis.CSharp.Syntax;
using Microsoft.EntityFrameworkCore;

namespace backend_csharp.Repositories.PositionRepository;

public class PositionRepository : IPositionRepository
{
    private DataContext DataContext { get; set; }

    public PositionRepository(DataContext dataContext)
    {
        this.DataContext = dataContext;
    }

    public async Task<IEnumerable<Position>> GetAllPositions()
    {
        return await DataContext.Positions.ToListAsync();
    }

    public async Task<Position> GetPositionById(int positionId)
    {
        return DataContext.Positions.Where(e => e.Id == positionId).FirstOrDefault();
    }

    public async Task<IEnumerable<Position>> GetPositionsByUserId(int id)
    {
        return await DataContext.Positions.Where(e => e.UserId == id).ToListAsync();
    }

    public async Task<IEnumerable<PositionEdge>> GetEdgesByUserId(int id)
    {
        return await DataContext.PositionEdges.Where(e => e.UserId == id).ToListAsync();
    }

    public bool AddPosition(PositionDto positionDto)
    {
        var applicationUserEntity =
            DataContext.Users.Where(u => u.Id == positionDto.UserId).FirstOrDefault();
        var newPosition = new Position()
        {
            Name = positionDto.Name,
            Description = positionDto.Description,
            UserId = positionDto.UserId,
            User = applicationUserEntity,
        };
        DataContext.Add(newPosition);
        return Save();
    }

    public bool AddPositionWithEdges(PositionDto positionDto)
    {
        var userEntity =
            DataContext.Users.Where(u => u.Id == positionDto.UserId).FirstOrDefault();
        
        var sourceIds = positionDto.SourceIds;
        var targetIds = positionDto.TargetIds;
        
        var newPosition = new Position()
        {
            Name = positionDto.Name,
            Description = positionDto.Description,
            UserId = positionDto.UserId,
            User = userEntity,
        };
        
        if (sourceIds.Count > 0)
        {
            var sourcePositions = DataContext.Positions.Where(p => sourceIds.Contains(p.Id)).ToList();
            foreach (var source in sourcePositions)
            {
                var edge = new PositionEdge()
                {
                    SourceId = source.Id,
                    TargetId = newPosition.Id,
                    SourcePosition = source,
                    TargetPosition = newPosition,
                };
                source.Targets.Add(edge);
                newPosition.Sources.Add(edge);
            }
            
        }

        if (targetIds.Count > 0)
        {
            var targetPositions = DataContext.Positions.Where(p => targetIds.Contains(p.Id)).ToList();
            foreach (var target in targetPositions)
            {
                var edge = new PositionEdge()
                {
                    SourceId = newPosition.Id,
                    TargetId = target.Id,
                    SourcePosition = newPosition,
                    TargetPosition = target,
                };
                target.Sources.Add(edge);
                newPosition.Targets.Add(edge);
            }
        }

        DataContext.Add(newPosition);
        
        return Save();
    }
    
    public bool CreateEdge(Position sourcePosition, Position targetPosition)
    {
        var relation = new PositionEdge()
        {
            SourceId = sourcePosition.Id,
            TargetId = targetPosition.Id,
            SourcePosition = sourcePosition,
            TargetPosition = targetPosition,
        };
        
        DataContext.Add(relation);
        
        DataContext.Positions.Where(p => p.Id == sourcePosition.Id).FirstOrDefault().Targets.Add(relation);
        DataContext.Positions.Where(p => p.Id == targetPosition.Id).FirstOrDefault().Sources.Add(relation);

        return Save();
    }

    public bool AddRelationToExistingPosition(PositionEdge positionEdge, Position position)
    {
        return Save();
    }
    
    public bool Save()
    {
        var saved = DataContext.SaveChanges();
        return saved > 0 ? true : false;
    }
    
    

}