using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace server2MVC.Migrations
{
    /// <inheritdoc />
    public partial class UnicalId : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "UnicalId",
                table: "Advertismnet",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "UnicalId",
                table: "Advertismnet");
        }
    }
}
