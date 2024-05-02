using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using server1.Data;
var builder = WebApplication.CreateBuilder(args);

builder.Services.AddDbContext<server1Context>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("server1Context") ?? throw new InvalidOperationException("Connection string 'server1Context' not found.")));
builder.Services.AddCors(options =>
{
    options.AddPolicy("MyAllowSpecificOrigins",
        policyBuilder =>
        {
            policyBuilder.WithOrigins("http://localhost:5173")
                .AllowAnyHeader()
                .AllowAnyMethod();
        });
});



// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle

var app = builder.Build();

// Configure the HTTP request pipeline.

app.UseCors("MyAllowSpecificOrigins");

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
