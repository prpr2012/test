/*TMODJS:{"version":1,"md5":"098ddb9d3dc6a3b0963f2556c54acb10"}*/
template('vl',function($data,$filename) {
'use strict';var $utils=this,$helpers=$utils.$helpers,$each=$utils.$each,$value=$data.$value,$index=$data.$index,$escape=$utils.$escape,$va=$data.$va,$out='';$out+=' ';
$each($data,function($value,$index){
$out+=' <div class="accordion" id="accordion';
$out+=$escape($index);
$out+='"> <div class="accordion-group"> <div class="accordion-heading"> <a class="accordion-toggle" data-toggle="collapse" data-parent="#accordion';
$out+=$escape($index);
$out+='" href="#collapse';
$out+=$escape($index);
$out+='"> <i class="icon-leaf"></i>';
$out+=$escape($value.navigation);
$out+=' </a> </div> <div id="collapse';
$out+=$escape($index);
$out+='" class="accordion-body collapse" style="height: 0px;"> <div class="accordion-inner"> <dl class="active"> ';
$each($value.list,function($va,$index){
$out+=' <dd><a href="';
$out+=$escape($va.href);
$out+='" class="box" target="_blank">';
$out+=$escape($va.name);
$out+='</a></dd> ';
});
$out+=' </dl> </div> </div> </div> </div> ';
});
return new String($out);
});