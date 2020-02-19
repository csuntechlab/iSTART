<!DOCTYPE html>
<html>
  <head>
    <meta name="viewport" content="width=device-width">
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <title>{{ config('app.name') }}</title>

  <style>img {
border: none; -ms-interpolation-mode: bicubic; max-width: 100%;
}
body {
background-color: rgb(250, 250, 250); font-family: sans-serif; -webkit-font-smoothing: antialiased; font-size: 14px; line-height: 1.4; margin: 0; padding: 0; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;
}
.btn-primary a:hover {
background-color: #106dbc !important; border-color: #106dbc !important;
}
.ExternalClass {
width: 100%;
}
.ExternalClass {
line-height: 100%;
}
.btn-primary table td:hover {
background-color: #106dbc !important;
}
.btn-primary a:hover {
background-color: #106dbc !important; border-color: #106dbc !important; -webkit-box-shadow: inset 0 0 50px 50px rgba(0,0,0,.2); -moz-box-shadow: inset 0 0 50px 50px rgba(0,0,0,.2); box-shadow: inset 0 0 50px 50px rgba(0,0,0,.2);
}
@media only screen and (max-width: 620px) {
  table[class=body] h1 {
    font-size: 28px !important; margin-bottom: 10px !important;
  }
  table[class=body] p {
    font-size: 16px !important;
  }
  table[class=body] ul {
    font-size: 16px !important;
  }
  table[class=body] ol {
    font-size: 16px !important;
  }
  table[class=body] td {
    font-size: 16px !important;
  }
  table[class=body] span {
    font-size: 16px !important;
  }
  table[class=body] a {
    font-size: 16px !important;
  }
  table[class=body] .wrapper {
    padding: 10px !important;
  }
  table[class=body] .article {
    padding: 10px !important;
  }
  table[class=body] .content {
    padding: 0 !important;
  }
  table[class=body] .container {
    padding: 0 !important; width: 100% !important;
  }
  table[class=body] .main {
    border-left-width: 0 !important; border-radius: 0 !important; border-right-width: 0 !important;
  }
  table[class=body] .btn table {
    width: 100% !important;
  }
  table[class=body] .btn a {
    width: 100% !important;
  }
  table[class=body] .img-responsive {
    height: auto !important; max-width: 100% !important; width: auto !important;
  }
  .logo-img {
    width: 25%:;
  }
}
</style>
</head>
  <body class="" style="font-family: sans-serif; -webkit-font-smoothing: antialiased; font-size: 14px; line-height: 1.4; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; margin: 0; padding: 0;" bgcolor="FAFAFA">
    <span class="preheader" style="color: transparent; display: none; height: 0; max-height: 0; max-width: 0; opacity: 0; overflow: hidden; mso-hide: all; visibility: hidden; width: 0;">iSTART Web App Email Notification.</span>
    <table role="presentation" border="0" cellpadding="0" cellspacing="0" class="body" style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: 100%;" bgcolor="FAFAFA">
      <tr>
        <td style="font-family: sans-serif; font-size: 14px;" valign="top"> </td>
        <td class="container" style="font-family: sans-serif; font-size: 14px; display: block; max-width: 580px; width: 580px; margin: 0 auto; padding: 10px;" valign="top">
          <div class="content" style="box-sizing: border-box; display: block; max-width: 580px; margin: 0 auto; padding: 10px;">


            <table role="presentation" class="main" style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: 100%; border-radius: 3px;" bgcolor="FAFAFA">


              <tr>
                <td class="wrapper" style="font-family: sans-serif; font-size: 14px; box-sizing: border-box; padding: 20px;" valign="top">
                  <table role="presentation" border="0" cellpadding="0" cellspacing="0" style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: 100%;">
                    <tr>
                      <td style="font-family: sans-serif; font-size: 14px;" valign="top">
                          @yield('content')
                        <br>
                        <table role="presentation" border="0" cellpadding="0" cellspacing="0" class="btn btn-primary" style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: 100%; box-sizing: border-box;">
                          <tbody>
                            <tr>
                              <td align="center" style="font-family: sans-serif; font-size: 14px; padding-bottom: 15px;" valign="top">
                                <table role="presentation" border="0" cellpadding="0" cellspacing="0" style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: auto;">
                                  <tbody>
                                    <tr>
                                      <td style="font-family: sans-serif; font-size: 14px; border-radius: 5px;" align="center" bgcolor="3771DC" valign="top"> <a href="https://www.sandbox.csun.edu/apps/istart/#/login" target="_blank" style="color: #ffffff; text-decoration: none; background-color: rgb(55, 113, 220); border-radius: 5px; box-sizing: border-box; cursor: pointer; display: inline-block; font-size: 14px; font-weight: bold; margin: 0; padding: 12px 25px; border: 1px solid rgb(55,113,220);">iStart Web App</a> </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>


            </table>



            <div class="footer" style="clear: both; margin-top: 10px; width: 100%;" align="center">
              <table role="presentation" border="0" cellpadding="0" cellspacing="0" style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: 100%;">
                <tr>
                  <td class="content-block" style="font-family: sans-serif; font-size: 12px; padding-bottom: 10px; padding-top: 10px; color: #716f6f;" align="center" valign="top">
                    <a href="https://www.csun.edu/istart" target="_blank" rel="noreferrer" style="color: #716f6f; font-size: 12px; text-align: center; text-decoration: underline;"><img class="logo-img" src="https://www.sandbox.csun.edu/apps/istart/images/logos/logo_color.png" alt="iSTART Logo" style="-ms-interpolation-mode: bicubic; max-width: 100%; width: 15%; border: none;"></a>
                  </td>
                </tr>
                <tr>
                  <td class="content-block powered-by" style="font-family: sans-serif; font-size: 12px; padding-bottom: 10px; padding-top: 10px; color: #716f6f;" align="center" valign="top">
                    Powered by <a href="https://www.sandbox.csun.edu/" target="_blank" rel="noreferrer" style="color: #716f6f; font-size: 12px; text-align: center; text-decoration: underline;">@TechLab</a>.
                  </td>
                </tr>
              </table>
            </div>


          </div>
        </td>
        <td style="font-family: sans-serif; font-size: 14px;" valign="top"> </td>
      </tr>
    </table>
  </body>
</html>
