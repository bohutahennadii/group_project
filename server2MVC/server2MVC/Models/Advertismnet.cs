using Microsoft.Build.Framework;
using System.ComponentModel.DataAnnotations.Schema;
using System.Drawing.Imaging;

namespace server2MVC.Models
{
    public class Advertismnet
    {
        public int ID { get; set; }

        public string Title { get; set; }
        public string Description { get; set; }
        public bool isActive { get; set; }
        [NotMapped]
        public IFormFile Photo { get; set; }
        public string ImagePath { get; set; }
        

    }
}
