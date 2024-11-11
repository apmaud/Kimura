using backend_csharp.Data;
using Microsoft.EntityFrameworkCore;

namespace backend_csharp.Entities.Infrastructure;

public static class MigrationExtensions
{
    public static void ApplyMigrations(this IApplicationBuilder app)
    {
        using IServiceScope scope = app.ApplicationServices.CreateScope();

        using DataContext context = scope.ServiceProvider.GetRequiredService<DataContext>();
        
        context.Database.Migrate();
    }
}