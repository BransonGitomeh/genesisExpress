var navbar = require("../peices/navbar");
var forminput = require("../peices/forminput");

var footer = require("../peices/footer");
var sidebar = require("../peices/sidebar");
// var pdfobject = require("../peices/pdfobject");

var contactForm = require("../../../../__components/contactForm")
var register = require('../../../../__components/login/register');
module.exports = {
  view:function(ctrl){
      return m(".app",[
          m.component(register,{
            backgroundColor:"blue",
            btnColor:"blue",
            holderPic:"/images/default/logo.png",
            verifyLink:"/verify/student/"
          })
       ])
    }
}
