using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace GMA.Assets
{
    public class TipoServidor
    {
        public static bool IsLocalhost()
        {
            var host = HttpContext.Current.Request.Url.Host;

            if (host.Contains("localhost")
                || host.Contains("10.197.248.220")
                || host.Contains("df7560sr145"))
            {
                return true;
            }
            return false;
        }

        public static bool IsDev()
        {
            var host = HttpContext.Current.Request.Url.Host;

            if (host.Contains("localhost")
                || host.Contains("10.197.248.220")
                || host.Contains("df7560sr145")
                || host.Contains("ceati.des.df.caixa"))
            {
                return true;
            }
            return false;
        }
    }
}