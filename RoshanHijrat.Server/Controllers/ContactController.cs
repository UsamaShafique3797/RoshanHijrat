using MailKit.Net.Smtp;
using Microsoft.AspNetCore.Mvc;
using MimeKit;
using RoshanHijrat.Server.Models;

namespace RoshanHijrat.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ContactController : ControllerBase
    {
        [HttpPost("send")]
        public IActionResult SendEmail([FromBody] ContactForm model)
        {
            try
            {
                var message = new MimeMessage();
                message.From.Add(new MailboxAddress("ZAK's Consultants", "usamashafique3797@gmail.com"));
                message.To.Add(new MailboxAddress("Usama", "usamashafique3797@gmail.com"));
                message.Subject = model.Subject ?? "New Contact Form Message";

                message.Body = new TextPart("html")
                {
                    Text = $@"
                        <h3>New Message from ZAK's Contact Form</h3>
                        <p><strong>Name:</strong> {model.Name}</p>
                        <p><strong>Email:</strong> {model.Email}</p>
                        <p><strong>Phone:</strong> {model.Phone}</p>
                        <p><strong>Project:</strong> {model.Project}</p>
                        <p><strong>Message:</strong> {model.Message}</p>"
                };

                using (var client = new SmtpClient())
                {
                    client.Connect("smtp.gmail.com", 587, false);
                    client.Authenticate("usamashafique3797@gmail.com", "tvyb svei blkk doae");
                    client.Send(message);
                    client.Disconnect(true);
                }

                return Ok("Email sent successfully!");
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Error sending email: {ex.Message}");
            }
        }
    }
}

