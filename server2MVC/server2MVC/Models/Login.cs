using System.ComponentModel.DataAnnotations;

namespace server2MVC.Models
{
    public class Login
    {
        [Required(ErrorMessage = "Enter your email!")]
        [EmailAddress]
        public string Email { get; set; }
        [Required(ErrorMessage = "Enter correct password!")]
        [DataType(DataType.Password)]
        public string Password { get; set; }
    }
}
