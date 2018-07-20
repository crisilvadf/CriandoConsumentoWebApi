using CriandoConsumentoWebApi.Models;
using System.Collections.Generic;
using System.Data.Entity;
using System.Data.Entity.ModelConfiguration.Conventions;
using System.Linq;
using System.Web;

namespace CriandoConsumentoWebApi.Data.Contexto
{
    public class ContextoLocal : DbContext
    {
        public ContextoLocal()
            : base("name=localConnection")
        {
            Database.SetInitializer<ContextoLocal>(null);
        }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            modelBuilder.Conventions.Remove<PluralizingTableNameConvention>();
            modelBuilder.Conventions.Remove<OneToManyCascadeDeleteConvention>();
            modelBuilder.Conventions.Remove<ManyToManyCascadeDeleteConvention>();

            modelBuilder.Properties()
                .Where(p => p.Name == p.ReflectedType.Name + "Id")
                .Configure(p => p.IsKey());
        }

        public DbSet<Usuario> Usuarios { get; set; }
        public DbSet<tFuncionarios> Funcionarios { get; set; }
    }
}