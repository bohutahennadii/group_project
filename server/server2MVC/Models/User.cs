using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;


namespace server2MVC.Models
{
    public class User
    {
        public int ID { get; set; }
        [Required]
        [MaxLength(50, ErrorMessage ="Ваше ім'я занадто довге")]
        [MinLength(2,ErrorMessage ="Ваше ім'я закоротке")]
        public string FirstName { get; set; }
        [Required]
        [MaxLength(50, ErrorMessage ="Ваше прізвище занадто довге")]
        [MinLength(2, ErrorMessage = "Ваше прізвище занадто коротке")]
        public string LastName { get; set; }
        [EmailAddress]
        [Required]
        public string Email { get; set; }
        [Required]
        [DataType(DataType.Password)]
        public string Password { get; set; }
        
        [NotMapped]
        [Compare("Password",ErrorMessage ="Repeat password")]
        public string repeatPassword {  get; set; }
        //[JsonPropertyName("ItemsID")]
        //public string[] ItemsId { get; set; } 
    }
}
