var navbar = require("../peices/navbar");
var forminput = require("../peices/forminput");

var footer = require("../peices/footer");
var sidebar = require("../peices/sidebar");
// var pdfobject = require("../peices/pdfobject");

var contactForm = require("../../../../shared_components/contactForm")
var forgot = require('../../../../shared_components/login/forgot');
module.exports = {
  view:function(ctrl){
      return m(".app",[
          m.component(forgot,{
            backgroundColor:"blue",
            btnColor:"blue",
            holderPic:"/images/default/logo.png",
            verifyLink:"/verify/student/"
          })
       ])
    }
}
