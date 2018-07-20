using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using CriandoConsumentoWebApi.Data.Contexto;
using CriandoConsumentoWebApi.Models;
using CriandoConsumentoWebApi.Data.Repositorio;

namespace CriandoConsumentoWebApi.Controllers
{
    public class FuncionarioController : ApiController
    {
        private ContextoLocal db = new ContextoLocal();

        // GET: api/Funcionario
        public IEnumerable<tFuncionarios> GetFuncionarios()
        {
            return db.Funcionarios;
        }

        // GET: api/Funcionario/5
        [ResponseType(typeof(tFuncionarios))]
        public IHttpActionResult GetFuncionario(int id)
        {
            tFuncionarios funcionario = db.Funcionarios.Find(id);
            if (funcionario == null)
            {
                return NotFound();
            }

            return Ok(funcionario);
        }

        // PUT: api/Funcionario/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutFuncionario(tFuncionarios funcionario)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            
            var dados = db.Funcionarios.Where(x => x.Mat_Func == funcionario.Mat_Func).FirstOrDefault();

            if (dados == null)
            {
                return NotFound();
            }
            
            dados.Nome_Func = funcionario.Nome_Func;

            db.Entry(dados).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST: api/Funcionario
        [ResponseType(typeof(tFuncionarios))]
        public IHttpActionResult PostFuncionario(tFuncionarios funcionario)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.Funcionarios.Add(funcionario);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = funcionario.Mat_Func }, funcionario);
        }

        // DELETE: api/Funcionario/5
        [ResponseType(typeof(tFuncionarios))]
        public IHttpActionResult DeleteFuncionario(int id)
        {
            tFuncionarios funcionario = db.Funcionarios.Find(id);
            if (funcionario == null)
            {
                return NotFound();
            }

            db.Funcionarios.Remove(funcionario);
            db.SaveChanges();

            return Ok(funcionario);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }
    }
}