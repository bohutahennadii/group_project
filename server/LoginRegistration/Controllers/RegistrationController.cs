using LoginRegistration.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using System.Data;
using System.Data.SqlClient;

namespace LoginRegistration.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RegistrationController : ControllerBase
    {
        private readonly IConfiguration _configuration;

        public RegistrationController(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        [HttpPost]
        [Route("registration")]
        public string registration(Registration registration)
        {
            using (SqlConnection con = new SqlConnection(_configuration.GetConnectionString("LoginRegistrationAPI")))
            {
                con.Open();

                using (SqlCommand cmd = new SqlCommand("INSERT INTO [Table] (FirstName, LastName, Email, Password) VALUES (@FirstName, @LastName, @Email, @Password)", con))
                {
                    cmd.Parameters.AddWithValue("@FirstName", registration.FirstName);
                    cmd.Parameters.AddWithValue("@LastName", registration.LastName);
                    cmd.Parameters.AddWithValue("@Email", registration.Email);
                    cmd.Parameters.AddWithValue("@Password", registration.Password);

                    int i = cmd.ExecuteNonQuery();
                    if (i > 0)
                    {
                        return "Data inserted";
                    }
                    else
                    {
                        return "Error";
                    }
                }
            }
        }

        [HttpPost]
        [Route("login")]
        public string login(Registration registration)
        {
            using (SqlConnection con = new SqlConnection(_configuration.GetConnectionString("LoginRegistrationAPI")))
            {
                con.Open();
                string query = "SELECT * FROM [Table] WHERE Email = @Email AND Password = @Password";
                using (SqlCommand cmd = new SqlCommand(query, con))
                {
                    cmd.Parameters.AddWithValue("@Email", registration.Email);
                    cmd.Parameters.AddWithValue("@Password", registration.Password);

                    using (SqlDataReader reader = cmd.ExecuteReader())
                    {
                        if (reader.HasRows)
                        {
                            return "You are logged in!";
                        }
                        else
                        {
                            return "Error";
                        }
                    }
                }
            }
        }

        // Налаштування CORS для цього методу
        [HttpOptions]
        [Route("login")]
        public IActionResult LoginOptions()
        {
            Response.Headers.Add("Access-Control-Allow-Origin", "http://localhost:5173"); // Змініть на адресу вашого React проекту
            Response.Headers.Add("Access-Control-Allow-Methods", "POST");
            Response.Headers.Add("Access-Control-Allow-Headers", "Content-Type");
            return Ok();
        }
        [HttpOptions]
        [Route("registration")]
        public IActionResult RegistrationOptions()
        {
            Response.Headers.Add("Access-Control-Allow-Origin", "http://localhost:5173/registr"); // Змініть на адресу вашого React проекту
            Response.Headers.Add("Access-Control-Allow-Methods", "POST");
            Response.Headers.Add("Access-Control-Allow-Headers", "Content-Type");
            return Ok();
        }
    }
}
