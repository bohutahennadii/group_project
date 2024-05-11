using System;
using System.Collections.Generic;
using System.Drawing;
using System.Drawing.Imaging;
using System.Linq;
using System.Threading.Tasks;
using Grpc.Core;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;
using server2MVC.Data;
using server2MVC.Migrations;
using server2MVC.Models;

namespace server2MVC.Controllers
{
    public class AdvertismnetsController : Controller
    {
        private readonly server2MVCContext _context;

        public AdvertismnetsController(server2MVCContext context)
        {
            _context = context;
        }
        

        
        // GET: Advertismnets
        public async Task<IActionResult> Index()
        {
              return _context.Advertismnet != null ? 
                          View(await _context.Advertismnet.ToListAsync()) :
                          Problem("Entity set 'server2MVCContext.Advertismnet'  is null.");
        }

        // GET: Advertismnets/Details/5
        public async Task<IActionResult> Details(int? id)
        {
            if (id == null || _context.Advertismnet == null)
            {
                return NotFound();
            }

            var advertismnet = await _context.Advertismnet
                .FirstOrDefaultAsync(m => m.ID == id);
            if (advertismnet == null)
            {
                return NotFound();
            }

            return View(advertismnet);
        }

        // GET: Advertismnets/Create
        public IActionResult Create()
        {
            return View();
        }


        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Create(Advertismnet advertismnet, IFormFile ImageFile)
        {
            string fileName = Path.GetFileNameWithoutExtension(ImageFile.FileName);
            string extension=Path.GetExtension(ImageFile.FileName);
            fileName = fileName + DateTime.Now.ToString("yymmssfff") + extension;
            advertismnet.ImagePath = "~/Image/" + fileName;
            string filePath = Path.Combine(Directory.GetCurrentDirectory(), "wwwroot", "Image", fileName);

            using (var stream = new FileStream(filePath, FileMode.Create))
            {
                await ImageFile.CopyToAsync(stream);
            }
            Random rnd = new Random();
            int randomId = rnd.Next(100000, 999999); // Мінімальне та максимальне значення для рандомного ідентифікатора
            advertismnet.UnicalId = randomId.ToString();
            _context.Add(advertismnet);
                    await _context.SaveChangesAsync();
                    return RedirectToAction(nameof(Index));
                
            
            return View(advertismnet);
        }










        // GET: Advertismnets/Edit/5
        public async Task<IActionResult> Edit(int? id)
        {
            if (id == null || _context.Advertismnet == null)
            {
                return NotFound();
            }

            var advertismnet = await _context.Advertismnet.FindAsync(id);
            if (advertismnet == null)
            {
                return NotFound();
            }
            return View(advertismnet);
        }

        // POST: Advertismnets/Edit/5
        // To protect from overposting attacks, enable the specific properties you want to bind to.
        // For more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Edit(int id, [Bind("ID,Title,Description,isActive")] Advertismnet advertismnet)
        {
            if (id != advertismnet.ID)
            {
                return NotFound();
            }

            if (ModelState.IsValid)
            {
                try
                {
                    _context.Update(advertismnet);
                    await _context.SaveChangesAsync();
                }
                catch (DbUpdateConcurrencyException)
                {
                    if (!AdvertismnetExists(advertismnet.ID))
                    {
                        return NotFound();
                    }
                    else
                    {
                        throw;
                    }
                }
                return RedirectToAction(nameof(Index));
            }
            return View(advertismnet);
        }

        // GET: Advertismnets/Delete/5
        public async Task<IActionResult> Delete(int? id)
        {
            if (id == null || _context.Advertismnet == null)
            {
                return NotFound();
            }

            var advertismnet = await _context.Advertismnet
                .FirstOrDefaultAsync(m => m.ID == id);
            if (advertismnet == null)
            {
                return NotFound();
            }

            return View(advertismnet);
        }

        // POST: Advertismnets/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> DeleteConfirmed(int id)
        {
            if (_context.Advertismnet == null)
            {
                return Problem("Entity set 'server2MVCContext.Advertismnet'  is null.");
            }
            var advertismnet = await _context.Advertismnet.FindAsync(id);
            if (advertismnet != null)
            {
                _context.Advertismnet.Remove(advertismnet);
            }
            
            await _context.SaveChangesAsync();
            return RedirectToAction(nameof(Index));
        }

        private bool AdvertismnetExists(int id)
        {
          return (_context.Advertismnet?.Any(e => e.ID == id)).GetValueOrDefault();
        }
    }
}
