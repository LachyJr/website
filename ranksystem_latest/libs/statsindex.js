const donut_time_color_1=window.getComputedStyle(document.getElementById("donut_time_color_1")).getPropertyValue("color"),donut_time_color_2=window.getComputedStyle(document.getElementById("donut_time_color_2")).getPropertyValue("color"),donut_version_color_1=window.getComputedStyle(document.getElementById("donut_version_color_1")).getPropertyValue("color"),donut_version_color_2=window.getComputedStyle(document.getElementById("donut_version_color_2")).getPropertyValue("color"),donut_version_color_3=window.getComputedStyle(document.getElementById("donut_version_color_3")).getPropertyValue("color"),donut_version_color_4=window.getComputedStyle(document.getElementById("donut_version_color_4")).getPropertyValue("color"),donut_version_color_5=window.getComputedStyle(document.getElementById("donut_version_color_5")).getPropertyValue("color"),donut_version_color_6=window.getComputedStyle(document.getElementById("donut_version_color_6")).getPropertyValue("color"),donut_nation_color_1=window.getComputedStyle(document.getElementById("donut_nation_color_1")).getPropertyValue("color"),donut_nation_color_2=window.getComputedStyle(document.getElementById("donut_nation_color_2")).getPropertyValue("color"),donut_nation_color_3=window.getComputedStyle(document.getElementById("donut_nation_color_3")).getPropertyValue("color"),donut_nation_color_4=window.getComputedStyle(document.getElementById("donut_nation_color_4")).getPropertyValue("color"),donut_nation_color_5=window.getComputedStyle(document.getElementById("donut_nation_color_5")).getPropertyValue("color"),donut_nation_color_6=window.getComputedStyle(document.getElementById("donut_nation_color_6")).getPropertyValue("color"),donut_platform_color_1=window.getComputedStyle(document.getElementById("donut_platform_color_1")).getPropertyValue("color"),donut_platform_color_2=window.getComputedStyle(document.getElementById("donut_platform_color_2")).getPropertyValue("color"),donut_platform_color_3=window.getComputedStyle(document.getElementById("donut_platform_color_3")).getPropertyValue("color"),donut_platform_color_4=window.getComputedStyle(document.getElementById("donut_platform_color_4")).getPropertyValue("color"),donut_platform_color_5=window.getComputedStyle(document.getElementById("donut_platform_color_5")).getPropertyValue("color"),donut_platform_color_6=window.getComputedStyle(document.getElementById("donut_platform_color_6")).getPropertyValue("color"),graph_lineColors_1=window.getComputedStyle(document.getElementById("graph_lineColors_1")).getPropertyValue("color"),graph_lineColors_2=window.getComputedStyle(document.getElementById("graph_lineColors_2")).getPropertyValue("color"),graph_pointFillColors_1=window.getComputedStyle(document.getElementById("graph_pointFillColors_1")).getPropertyValue("color"),graph_pointFillColors_2=window.getComputedStyle(document.getElementById("graph_pointFillColors_2")).getPropertyValue("color"),graph_pointStrokeColors_1=window.getComputedStyle(document.getElementById("graph_pointStrokeColors_1")).getPropertyValue("color"),graph_pointStrokeColors_2=window.getComputedStyle(document.getElementById("graph_pointStrokeColors_2")).getPropertyValue("color"),graph_fillOpacity=window.getComputedStyle(document.getElementById("graph_fillOpacity")).getPropertyValue("opacity");for(var m,tsn=new Array,i=1;i<36;i++)tsn[i]=document.getElementById("tsn"+i).value;m="0"===tsn[35]||"2"===tsn[35]?[0,0,tsn[34]]:0,Morris.Donut({element:"time-gap-donut",data:[{label:tsn[1],value:tsn[4]},{label:tsn[2],value:tsn[5]}],colors:[donut_time_color_1,donut_time_color_2]}),Morris.Donut({element:"client-version-donut",data:[{label:tsn[6],value:tsn[11]},{label:tsn[7],value:tsn[12]},{label:tsn[8],value:tsn[13]},{label:tsn[9],value:tsn[14]},{label:tsn[10],value:tsn[15]},{label:tsn[3],value:tsn[16]}],colors:[donut_version_color_1,donut_version_color_2,donut_version_color_3,donut_version_color_4,donut_version_color_5,donut_version_color_6]}),Morris.Donut({element:"user-descent-donut",data:[{label:tsn[17],value:tsn[22]},{label:tsn[18],value:tsn[23]},{label:tsn[19],value:tsn[24]},{label:tsn[20],value:tsn[25]},{label:tsn[21],value:tsn[26]},{label:tsn[3],value:tsn[27]}],colors:[donut_nation_color_1,donut_nation_color_2,donut_nation_color_3,donut_nation_color_4,donut_nation_color_5,donut_nation_color_6]}),Morris.Donut({element:"user-platform-donut",data:[{label:"Windows",value:tsn[28]},{label:"iOS",value:tsn[29]},{label:"Linux",value:tsn[30]},{label:"Android",value:tsn[31]},{label:"OSX",value:tsn[32]},{label:tsn[3],value:tsn[33]}],colors:[donut_platform_color_1,donut_platform_color_2,donut_platform_color_3,donut_platform_color_4,donut_platform_color_5,donut_platform_color_6]}),$(function(){var e="0"===tsn[35]||"1"===tsn[35]?Morris.Area({element:"serverusagechart",behaveLikeLine:!0,data:[],xkey:"y",ykeys:["a","b"],hideHover:"auto",fillOpacity:graph_fillOpacity,hoverCallback:function(o,e,t,l){return"<b>"+l.y+"</b><br><div class='morris-hover-point graph_tooltip_client_color'>Clients: "+l.a+"</div><div class='morris-hover-point graph_tooltip_channel_color'>Channel: "+l.b+"</div>"},labels:["Clients","Channel"],goals:m,lineColors:[graph_lineColors_1,graph_lineColors_2],pointFillColors:[graph_pointFillColors_1,graph_pointFillColors_2],pointStrokeColors:[graph_pointStrokeColors_1,graph_pointStrokeColors_2],resize:!0}):Morris.Area({element:"serverusagechart",behaveLikeLine:!0,data:[],xkey:"y",ykeys:["a"],hideHover:"auto",fillOpacity:graph_fillOpacity,hoverCallback:function(o,e,t,l){return"<b>"+l.y+"</b><br><div class='morris-hover-point graph_tooltip_client_color'>Clients: "+l.a+"</div>"},labels:["Clients"],goals:m,resize:!0});$("#period").on("change",function(){var o=$(this).val();$.ajax({type:"POST",url:"update_graph.php?serverusagechart="+o,data:0,dataType:"json",success:function(o){e.setData(o)}})})}),$(document).ready(function(o){$("#period").trigger("change")});var a=document.getElementById("days"),b=document.getElementById("hours"),c=document.getElementById("minutes"),d=document.getElementById("seconds"),e=document.getElementById("sut").value;function setTime(){++e,d.innerHTML=pad(e%60),c.innerHTML=pad(parseInt(e/60)%60),b.innerHTML=pad(parseInt(e/3600)%24),a.innerHTML=pad(parseInt(e/86400))}function pad(o){o+="";return o.length<2?"0"+o:o}setInterval(setTime,1e3);