
 {{each}}
<div class="accordion" id="accordion{{$index}}">
                <div class="accordion-group">
                  <div class="accordion-heading">
                    <a class="accordion-toggle" data-toggle="collapse" data-parent="#accordion{{$index}}" href="#collapse{{$index}}">
                     <i class="icon-leaf"></i>{{$value.navigation}}
                    </a>
                  </div>
                  <div id="collapse{{$index}}" class="accordion-body collapse" style="height: 0px;">
                    <div class="accordion-inner">
                        <dl class="active">
							{{each $value.list as $va}}
								<dd><a href="{{$va.href}}" class="box" target="_blank">{{$va.name}}</a></dd>
							{{/each}}
                        </dl>
                    </div>
                  </div>
                </div>                              
</div>
{{/each}}