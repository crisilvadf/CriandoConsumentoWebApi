using CriandoConsumentoWebApi.Data.Contexto;
using CriandoConsumentoWebApi.Models;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Linq;
using System.Linq.Expressions;
using System.Web;
using System.Web.Mvc;
using System.Web.UI.WebControls;

namespace CriandoConsumentoWebApi.Data.Repositorio
{
    public abstract class Repositorio
    {
        private ContextoLocal dbLocal = new ContextoLocal();

        protected Repositorio (ContextoLocal contexto)
	    {
            dbLocal = contexto;
	    }   

        public virtual tFuncionarios ObterPorId(int id)
        {
            return dbLocal.Funcionarios.Where(x => x.Mat_Func == id).FirstOrDefault();
        }

        public virtual IEnumerable<tFuncionarios> ObterTodos()
        {
            return dbLocal.Funcionarios.ToList();
        }

        public virtual IEnumerable<tFuncionarios> ObterTodosPaginado(int skip, int take)
        {
            return dbLocal.Funcionarios.Take(take).Skip(skip).ToList();
        }        

        public virtual IEnumerable<tFuncionarios> BuscarVarios(Expression<Func<tFuncionarios, bool>> predicate)
        {
            return dbLocal.Funcionarios.Where(predicate);
        }

        public virtual tFuncionarios BuscarUnico(Expression<Func<tFuncionarios, bool>> predicate)
        {
            return dbLocal.Funcionarios.FirstOrDefault(predicate);
        }

        public virtual tFuncionarios BuscarUnicoAsNoTracking(Expression<Func<tFuncionarios, bool>> predicate)
        {
            return dbLocal.Funcionarios.AsNoTracking().FirstOrDefault(predicate);
        }

        public virtual tFuncionarios Adicionar(tFuncionarios obj)
        {
            var objreturn = dbLocal.Funcionarios.Add(obj);
            return objreturn;
        }

        //public virtual TEntity Atualizar(TEntity obj)
        //{
        //    var entry = db.Entry(obj);
        //    DbSet.Attach(obj);
        //    entry.State = EntityState.Modified;
        //    return obj;
        //}

        //public virtual void Remover(int id)
        //{
        //    DbSet.Remove(DbSet.Find(id));
        //}        

        //public int SaveChanges()
        //{
        //    return Db.SaveChanges();
        //}

        //public void Dispose()
        //{
        //    Db.Dispose();
        //}

    }
}