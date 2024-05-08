using System;
using System.Collections.Generic;
using System.Linq;
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

        public DbSet<server2MVC.Models.Advertismnet> Advertismnet { get; set; } = default!;
    }
}
