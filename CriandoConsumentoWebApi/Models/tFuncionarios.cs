using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace CriandoConsumentoWebApi.Models
{
    public class tFuncionarios
    {
        [Key]
        public int Mat_Func { get; set; }

        [DisplayName("Matrícula")]
        public string Id_Caixa_Func { get; set; }

        [DisplayName("Nome")]
        public string Nome_Func { get; set; }

        [DisplayName("Cidade")]
        public string Cidade_Func { get; set; }

        [DisplayName("Bairro")]
        public string Bairro_Func { get; set; }

        public int IdGrupo { get; set; }
    }
}