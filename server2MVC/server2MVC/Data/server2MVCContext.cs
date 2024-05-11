using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Sockets;
using System.Text.Json;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using server2MVC.Models;

namespace server2MVC.Data
{
    public class server2MVCContext : DbContext
    {
        public server2MVCContext (DbContextOptions<server2MVCContext> options)
            : base(options)
        {
        }

        public DbSet<server2MVC.Models.User> User { get; set; } = default!;
        /*protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            var jsonSerializerOptions = new JsonSerializerOptions
            {
                PropertyNameCaseInsensitive = true // Опціональна конфігурація
            };
            modelBuilder.Entity<User>()
            .Property(u => u.ItemsId)
            .HasConversion(
                v => JsonSerializer.Serialize(v, jsonSerializerOptions),
                v => JsonSerializer.Deserialize<string[]>(v, jsonSerializerOptions)
            );
        }*/

        public DbSet<server2MVC.Models.Advertismnet> Advertismnet { get; set; } = default!;
       
    }
}
