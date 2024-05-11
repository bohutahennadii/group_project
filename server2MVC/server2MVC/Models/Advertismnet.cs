using Microsoft.Build.Framework;
using System.ComponentModel.DataAnnotations.Schema;
using System.Drawing.Imaging;
using System.Web;
namespace server2MVC.Models
{
    public class Advertismnet
    {
        public int ID { get; set; }

        public string Title { get; set; }
        public string Description { get; set; }
        public bool isActive { get; set; } = false;
        public string ImagePath { get; set; }
        [NotMapped]
        public IFormFile ImageFile { get; set; } 
        public string UnicalId {  get; set; }


    }
}
