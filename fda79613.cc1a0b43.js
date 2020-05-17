(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{147:function(e,a,t){"use strict";t.r(a),t.d(a,"frontMatter",(function(){return s})),t.d(a,"metadata",(function(){return b})),t.d(a,"rightToc",(function(){return r})),t.d(a,"default",(function(){return o}));var n=t(2),i=t(9),l=(t(0),t(154)),s={id:"message-payload",title:"Message payload",sidebar_label:"Message payload"},b={id:"message-payload",title:"Message payload",description:"The client uses `Message` class to represent messages which may be transmitted. A `Message` can carry various types of payload and accompanying metadata.",source:"@site/../docs/message-payload.md",permalink:"/docs/message-payload",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/../docs/message-payload.md",sidebar_label:"Message payload",sidebar:"someSidebar",previous:{title:"Getting started",permalink:"/docs/getting-started"},next:{title:"Message Durability Modes",permalink:"/docs/message-durability"}},r=[],c={rightToc:r};function o(e){var a=e.components,t=Object(i.a)(e,["components"]);return Object(l.b)("wrapper",Object(n.a)({},c,t,{components:a,mdxType:"MDXLayout"}),Object(l.b)("p",null,"The client uses ",Object(l.b)("inlineCode",{parentName:"p"},"Message")," class to represent messages which may be transmitted. A ",Object(l.b)("inlineCode",{parentName:"p"},"Message")," can carry various types of payload and accompanying metadata."),Object(l.b)("p",null,"A new message can be created as follows:"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-csharp"}),'var message = new Message("foo");\n')),Object(l.b)("p",null,"The ",Object(l.b)("inlineCode",{parentName:"p"},"Message")," constructor accepts a single parameter of type object. It's the message body. Although body argument is very generic, only certain types are considered as a valid payload:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"string")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"char")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"byte")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"sbyte")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"short")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"ushort")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"int")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"uint")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"long")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"ulong")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"float")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"System.Guid")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"System.DateTime")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"byte[]")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"Amqp.Types.List"))),Object(l.b)("p",null,"An attempt to pass an argument out of this list will result in ",Object(l.b)("inlineCode",{parentName:"p"},"ArgumentOutOfRangeException"),". Passing ",Object(l.b)("inlineCode",{parentName:"p"},"null")," is not acceptable either and will cause ",Object(l.b)("inlineCode",{parentName:"p"},"ArgumentNullException"),"."),Object(l.b)("p",null,"In order to get the message payload call ",Object(l.b)("inlineCode",{parentName:"p"},"GetBody")," and specify the expected type of the body section:"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-csharp"}),"var body = message.GetBody<T>();\n")),Object(l.b)("p",null,"If ",Object(l.b)("inlineCode",{parentName:"p"},"T")," matches the type of the payload, the value will be returned, otherwise, you will get ",Object(l.b)("inlineCode",{parentName:"p"},"default(T)"),"."))}o.isMDXComponent=!0}}]);