using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using server1.Models;

namespace server1.Data
{
    public class server1Context : DbContext
    {
        public server1Context (DbContextOptions<server1Context> options)
            : base(options)
        {
        }

        public DbSet<server1.Models.User> User { get; set; } = default!;
    }
}
