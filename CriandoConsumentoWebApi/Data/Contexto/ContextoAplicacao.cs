using CriandoConsumentoWebApi.Models;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Data.Entity.ModelConfiguration.Conventions;
using System.Linq;
using System.Web;

namespace CriandoConsumentoWebApi.Data.Contexto
{
    public class ContextoAplicacao : DbContext
    {
        public ContextoAplicacao()
            : base("name=conectionStringDF7436SR611ProducaoAplicacao")
        {
            Database.SetInitializer<ContextoAplicacao>(null);
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

        //public DbSet<MapaAtendimento> MapaAtendimento { get; set; }
        //public DbSet<Celulas> Celulas { get; set; }
        //public DbSet<tCoordenacao> Coordenacao { get; set; }
        //public DbSet<TMapaAtendimento> TMapaAtendimento { get; set; }
    }
}