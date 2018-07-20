using CriandoConsumentoWebApi.Data.Contexto;
using CriandoConsumentoWebApi.Data.Repositorio;
using CriandoConsumentoWebApi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Web;
using System.Web.Mvc;

namespace CriandoConsumentoWebApi.Controllers
{
    public partial class HomeController : Controller
    {

        //Repositorio repo = new Repositorio();
        HttpClient client;
        Uri usuarioUri;
        Uri funcionarioUri;
        string retorno;
        public HomeController()
        {
            if (client == null)
            {
                client = new HttpClient();
                client.BaseAddress = new Uri("http://localhost:50233");
                client.DefaultRequestHeaders.Accept.Add(new System.Net.Http.Headers.MediaTypeWithQualityHeaderValue("Application/json"));
            }
        }

        public ActionResult Index(int? val)
        {
            ViewBag.Title = "Home Page";

            getAll();

            ViewBag.Retorno = retorno;
            
            return View();
        }

        public ActionResult Delete(int id)
        {
            DeleteForId(id);

            retorno = "delete";

            return Json(retorno);
        }

        public ActionResult Update(int id, string nome)
        {
            UpdateForId(id, nome);

            retorno = "update";

            return Json(retorno);
        }

        private void DeleteForId(int? id)
        {
            System.Net.Http.HttpResponseMessage response = client.GetAsync("api/Funcionario/" + id).Result;
            response = client.DeleteAsync("api/Funcionario/" + id).Result;

            if (response.IsSuccessStatusCode)
            {
                funcionarioUri = response.Headers.Location;
            }
            else
            {
                Response.Write(response.StatusCode.ToString() + " - " + response.ReasonPhrase.ToString());
            }

            getAll();
        }

        public void UpdateForId(int id, string nome)
        {
            var funcionario = new tFuncionarios() { Mat_Func = id, Nome_Func = nome };

            System.Net.Http.HttpResponseMessage response = client.GetAsync("api/Funcionario/").Result;
            response = client.PutAsJsonAsync("api/Funcionario/", funcionario).Result;

            if (response.IsSuccessStatusCode)
            {
                funcionarioUri = response.Headers.Location;
            }
            else
            {
                Response.Write(response.StatusCode.ToString() + " - " + response.ReasonPhrase.ToString());
            }
            
            getAll();
        }


        private void getAll()
        {
            //chamando a api pela url
            System.Net.Http.HttpResponseMessage responseUsuario = client.GetAsync("api/usuario").Result;

            //se retornar com sucesso busca os dados dos usuários
            if (responseUsuario.IsSuccessStatusCode)
            {
                //pegando o cabeçalho
                usuarioUri = responseUsuario.Headers.Location;

                //pegando os dados do Rest e armazenando na variável usuários
                var usuarios = responseUsuario.Content.ReadAsAsync<IEnumerable<Usuario>>().Result;

                //preenchendo a lista com os dados retornados da variável
                ViewBag.DadosUsuarios = usuarios;
            }

            //chamando a api pela url
            System.Net.Http.HttpResponseMessage responseFuncionario = client.GetAsync("api/funcionario").Result;

            //se retornar com sucesso busca os dados do funcionários
            if (responseFuncionario.IsSuccessStatusCode)
            {
                //pegando o cabeçalho
                funcionarioUri = responseFuncionario.Headers.Location;

                //pegando os dados do Rest e armazenando na variável funcionários
                var funcionarios = responseFuncionario.Content.ReadAsAsync<IEnumerable<tFuncionarios>>().Result.Where(x => x.IdGrupo == 57);

                //preenchendo a lista com os dados retornados da variável
                ViewBag.DadosFuncionarios = funcionarios;
            }
        }
    }
}
