
using backend_csharp.Entities.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;

namespace backend_csharp.Data;

                

public class DataContext : IdentityDbContext<User, IdentityRole<int>, int>
{
    public DataContext(DbContextOptions<DataContext> options): base(options)
    {
    }

    protected override void OnModelCreating(ModelBuilder builder)
    {
        base.OnModelCreating(builder);

        builder.Entity<User>()
            .HasMany(e => e.Positions)
            .WithOne(e => e.User)
            .HasForeignKey(e => e.UserId)
            .HasPrincipalKey(e => e.Id);
        
        builder.Entity<Position>()
            .HasOne(c => c.User)
            .WithMany(u => u.Positions)
            .HasForeignKey(c => c.UserId)
            .IsRequired();
        
        builder.Entity<User>()
            .HasMany(e => e.PositionEdges)
            .WithOne(e => e.ApplicationUser)
            .HasForeignKey(e => e.UserId)
            .HasPrincipalKey(e => e.Id);
        
        builder.Entity<PositionEdge>()
            .HasOne(c => c.ApplicationUser)
            .WithMany(u => u.PositionEdges)
            .HasForeignKey(c => c.UserId)
            .IsRequired();

        builder.Entity<PositionEdge>()
            .HasKey(e => new { e.SourceId, e.TargetId });

        builder.Entity<PositionEdge>()
            .HasOne(e => e.SourcePosition)
            .WithMany(e => e.Targets)
            .HasForeignKey(e => e.SourceId);

        builder.Entity<PositionEdge>()
            .HasOne(e => e.TargetPosition)
            .WithMany(e => e.Sources)
            .HasForeignKey(e => e.TargetId);

    }
    
    public DbSet<Position> Positions { get; set; }
    
    public DbSet<User> Users { get; set; }
    
    public DbSet<PositionEdge> PositionEdges { get; set; }
    
}