//我的灯灯 订单

function getByClass(oParent,sClass)
{
    var oEle=oParent.getElementsByTagName('*');
    var Result=[];
    for (var i = 0; i < oEle.length; i++) {
        if (oEle[i].className==sClass) {
            Result.push(oEle[i]);
        }
    }
    return Result;
}

window.onload=function()
{
	//我的灯灯
	
	baby.onmouseover=function()
	{
		var baby=document.getElementById('baby');
		var oUl=baby.getElementsByTagName('ul')[0];
		var oLi=oUl.getElementsByTagName('li');
		var ipt=baby.getElementsByTagName('input')[0];
		var txtBox=document.getElementById('txtBox');
		var timer=null;
    var p=true;
		startMove(oUl,{height:60})
  //   clearInterval(timer)
		// timer=setInterval(function(){
  //     oUl.style.height=parseInt(parseFloat(oUl.style.height))+4+'px';
  //     if (parseInt(parseFloat(oUl.style.height))!=60) 
  //   {
  //     // clearInterval(timer);
  //     p=false
  //   }
  //   },15);
  //   if (p) {
  //     clearInterval(timer);
  //   }
    
		oUl.style.display='block';
    oUl.onmouseover=function(){
      clearInterval
    }
		for (var i = 0; i < oLi.length; i++) {

			oLi[i].onmouseover=function()
			{

				this.style.background='#e8e8e8';
				this.onclick=function()
				{
					ipt.value=this.innerHTML;
					txtBox.placeholder=this.innerHTML;
					oUl.style.height=0;
				}
			}
			oLi[i].onmouseout=function()
			{
				this.style.background='#F5F5F5';
			}
		}
	}
	baby.onmouseout=function()
	{

      var oUl=baby.getElementsByTagName('ul')[0];
    startMove(oUl,{height:0})
    oUl.style.display='';
		
	}

    baby_none.onmouseover=function()
    {
        var baby_none=document.getElementById('baby_none');
        var oUl=baby_none.getElementsByTagName('ul')[0];
        var oLi=oUl.getElementsByTagName('li');
        var ipt=baby_none.getElementsByTagName('input')[0];
        var txtBox_none=document.getElementById('txtBox_none');
        var timer=null;
        startMove(oUl,{height:60})
        
        oUl.style.display='block';

        for (var i = 0; i < oLi.length; i++) {

            oLi[i].onmouseover=function()
            {
                this.style.background='#e8e8e8';
                this.onclick=function()
                {
                    ipt.value=this.innerHTML;
                    txtBox_none.placeholder=this.innerHTML;
                    oUl.style.height=0;
                }
            }
            oLi[i].onmouseout=function()
            {
                this.style.background='#F5F5F5';
            }
        }
    }
    baby_none.onmouseout=function()
    {
        var oUl=baby_none.getElementsByTagName('ul')[0];
        startMove(oUl,{height:0})
        oUl.style.display='';
    }


    /*搜索框出现**/
   
    window.onscroll = function () {
    var slide_search=document.getElementById('slide_search');
    var right_bar=document.getElementById('right_bar');
    var cont=document.getElementById('cont');
    var scrollTop=document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
    if (scrollTop > 250) {
        slide_search.style.display = "block";
        //slide_search.style.top=0+'px';
        //startMove(slide_search,{height:70})
        right_bar.style.display='block';
    }
    else if (scrollTop<250){
       slide_search.style.display ='none';
       //startMove(slide_search,{height:0})
        right_bar.style.display='none';
    }

}
    //回到顶部按钮

    var bar_1=document.getElementById('bar_1');
    var timer=null;
    var right_bar=document.getElementById('right_bar');
    var slide_search=document.getElementById('slide_search');
    var pp=false;
    var scrollTop=document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
    bar_1.onclick=function()
    {
        document.documentElement.scrollTop=document.body.scrollTop=window.pageYOffset=0;
        // timer=setInterval(function(){
        // var scrollTop=document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;//兼容
        // var iSpeed=Math.floor(-scrollTop/8);//向下取整
        // pp=true;
        // document.documentElement.scrollTop=document.body.scrollTop=window.pageYOffset=scrollTop+iSpeed;
        //   if(scrollTop==0) 
        //     {
        //       clearInterval(timer);
        //     }
        // },30);
          // window.onscroll=function()

          //       {
          //           if (!pp) {clearInterval(timer);}
          //           pp=false;//判断是否是用户操作
          //       }
          //   //return false;

    }


	//广告轮播图
    function slide_top5()
    {
			var container=document.getElementById('container');
            var list=document.getElementById('list');
            var buttons=document.getElementById('buttons').getElementsByTagName('span');
            var prev=document.getElementById('prev');
            var next=document.getElementById('next');
            var index=1;
            var animated=false;
            var timer=null;
            function animate(offset)
            {
                var newLeft=parseInt(list.style.left)+offset;
                var time=300;
                var inteval=10;
                var speed=offset/25;
                function go(){
                if (speed>0&&parseInt(list.style.left)<newLeft||speed<0&&parseInt(list.style.left)>newLeft)
                 {
                    animated=true;
                    list.style.left=parseInt(list.style.left)+speed+'px';
                    setTimeout(go,10)
                 }
                 else
                 {  
                    animated=false;
                    list.style.left=newLeft+'px';
                 if (parseInt(list.style.left)==-4200) 
                 {
                    list.style.left=-700+'px';
                 }
                 if (parseInt(list.style.left)==0) 
                 {
                    list.style.left=-3500+'px';
                 }

                 } 
            }
            go();
            }

            function showButton()
            {
                for (var i = 0; i < buttons.length; i++) {
                    buttons[i].className='';
                }
                buttons[index-1].className='on';
            }
            next.onclick=function()
            {
                if (animated) {return}
                if (index==5) 
                {
                    index=1;
                }
                else
                {
                    index++
                }
              if (!animated) { animate(-700)}
                showButton()
            }
             prev.onclick=function()
            {
                if (animated) {return}
                 if (index==1) 
                {
                    index=5;
                }
                else
                {
                    index--
                }
                if (!animated) { animate(700)}
               
                showButton()
            }

            var num;
            for (var i = 0; i < buttons.length; i++) {
                buttons[i].num=i;
                buttons[i].onclick=function()
                {
                    if (animated) {return}
                  var  myIndex= this.num+1;
                  var  offset=(myIndex-index)*-700;
                    index=myIndex;
                    if (!animated) {animate(offset);}
                    
                    showButton();
                }
            }

            timer=setInterval(function(){next.onclick()},2000)
           
                
            
            container.onmouseover=function()
            {
            	clearInterval(timer)
            }
            container.onmouseout=function()
            {
            	timer=setInterval(function(){next.onclick()},2000)
            }
    }
    slide_top5();

            /*信息滚动栏*/
         function scroll(ht,speed,delay)
        {
            var newli=document.getElementById('new_li');
            var newUl=newli.getElementsByTagName('ul')[0];
            var scrollTop = document.documentElement.scrollTop || 
            window.pageYOffset ||document.body.scrollTop;
            var t;
            var move=true;
            newUl.style.marginTop=0;
            newUl.innerHTML+=newUl.innerHTML;
            newli.onmouseover=function(){move=false;}
            newli.onmouseout=function(){move=true;}

         function start()
         {
         	t=setInterval(scrolling,speed);
         	if(move) 
            {
                newUl.style.marginTop=parseInt(newUl.style.marginTop)-1+"px";
            }
         }

         function scrolling()
         {
         	if(parseInt(newUl.style.marginTop)%ht!=0)
         	{
         		newUl.style.marginTop=parseInt(newUl.style.marginTop)-1+"px"
         		if(Math.abs(parseInt(newUl.style.marginTop))>=newUl.scrollHeight/2) 
				{
					newUl.style.marginTop=0;
				}
         	}
         	else
         	{
         		clearInterval(t)
         		setTimeout(start,delay)
         	}
         }
         setTimeout(start,delay);//加载后延迟滚动
        }
        scroll(24,20,1500)

        /*侧边轮播（无焦点）*/
        function slide_none(a)
        {
            var items_left_slide_ul=document.getElementById('items_left_slide_ul'+a);
            var items_prev=document.getElementById('items_prev'+a);
            var items_next=document.getElementById('items_next'+a);
            var items_slide=document.getElementById('items_slide'+a);
            var pp=false;
            var ti=null;
            function move(offset)
            {
                var speed=offset/24;
                var newLeft=parseInt(items_left_slide_ul.style.left)+offset;
                //items_left_slide_ul.style.left=parseInt(items_left_slide_ul.style.left)+speed+'px';
                function go()
                {
                    if (speed>0&&parseInt(items_left_slide_ul.style.left)<newLeft||
                        speed<0&&parseInt(items_left_slide_ul.style.left)>newLeft) 
                    {
                        pp=true;
                        items_left_slide_ul.style.left=parseInt(items_left_slide_ul.style.left)+speed+'px';
                        setTimeout(go,10)
                    }
                    else
                    {
                        pp=false;
                        items_left_slide_ul.style.left=newLeft+'px';
                        if (parseInt(items_left_slide_ul.style.left)==0) 
                        {
                            items_left_slide_ul.style.left=-720+'px';
                        }
                        if (parseInt(items_left_slide_ul.style.left)==-960) 
                        {
                             items_left_slide_ul.style.left=-240+'px';
                        }
                    }
                }
                go()
            }
            items_next.onclick=function()

            {
                if (!pp) {move(-240)}
               
            }
            items_prev.onclick=function()
            {
                if (!pp) {move(240)}
                
            }
        ti=setInterval(function(){items_next.onclick()},2500)
        items_slide.onmouseover=function()
        {
            clearInterval(ti)
        }
        items_slide.onmouseout=function()
        {
            ti=setInterval(function(){items_next.onclick()},2500)
        }

        }

        slide_none('');
        slide_none(1);
        slide_none(2);
        slide_none(3);  
        slide_none(4);

        //商家推荐 轮播图
       function slide_five(a)
        {
            var items_bottom_slide=document.getElementById('items_bottom_slide'+a);
            var items_bottom_slide_ul=items_bottom_slide.getElementsByTagName('ul')[0];
            var items_bottom_buttons=document.getElementById('items_bottom_buttons'+a).getElementsByTagName('span');
            var Nonee=document.getElementById('nonee'+a);
            var pp=false;
            var ti=null;
           function move(offset)
           {
          
             var newLeft=parseInt(items_bottom_slide_ul.style.left)+offset;
             var speed=offset/30;
             
            function go()
            {
                if (speed>0&&parseInt(items_bottom_slide_ul.style.left)<newLeft||
                    speed<0&&parseInt(items_bottom_slide_ul.style.left)>newLeft)
                    {
                        pp=true;
                        items_bottom_slide_ul.style.left=parseInt(items_bottom_slide_ul.style.left)+speed+'px'
                        setTimeout(go,10)
                    }
                else
                {
                    pp=false;
                    items_bottom_slide_ul.style.left=newLeft+'px'
                    if (parseInt(items_bottom_slide_ul.style.left)==0)
                     {
                        items_bottom_slide_ul.style.left=-1800+'px';
                     }
                     if (parseInt(items_bottom_slide_ul.style.left)==-2400)
                     {
                        items_bottom_slide_ul.style.left=-600+'px';
                     }
                }
            }
           go()
           }
           var index=1;
           function button()
           {
            for (var i = 0; i < items_bottom_buttons.length; i++) 
            {
                items_bottom_buttons[i].className='';
            }
            items_bottom_buttons[index-1].className='light';
           }
           
            var num;
            for (var i = 0; i < items_bottom_buttons.length; i++) {
                items_bottom_buttons[i].num=i;
                items_bottom_buttons[i].onclick=function()
                {
                    if (pp) {return};
                var myIndex= this.num+1;
                var offset=(myIndex-index)*-600;
                    index=myIndex;
                    if (!pp) {move(offset)};
                    button();
                }
            }
          
           Nonee.onclick=function()
           {
            if (index==3) 
           {
            index=1;
           }
           else
           {
            index++;
           }
           button();
           if (!pp) {move(-600)};
           }
           
           ti=setInterval(function(){Nonee.onclick()},2000)
           items_bottom_slide.onmouseover=function()
           {
            clearInterval(ti);
           }
           items_bottom_slide.onmouseout=function()
           {
            ti=setInterval(function(){Nonee.onclick()},2000);
           }
         
        }

slide_five('');
slide_five(1)
slide_five(2)
slide_five(3)
//slide_five(4)
        function slide_250()
        {
            var items_bottom_slide=document.getElementById('items_bottom_slide4');
            var items_bottom_slide_ul=items_bottom_slide.getElementsByTagName('ul')[0];
            var items_bottom_buttons=document.getElementById('items_bottom_buttons4').getElementsByTagName('span');
            var Nonee=document.getElementById('nonee4');
            var pp=false;
            var ti=null;
           function move(offset)
           {
          
             var newLeft=parseInt(items_bottom_slide_ul.style.left)+offset;
             var speed=offset/25;
             
            function go()
            {
                if (speed>0&&parseInt(items_bottom_slide_ul.style.left)<newLeft||
                    speed<0&&parseInt(items_bottom_slide_ul.style.left)>newLeft)
                    {
                        pp=true;
                        items_bottom_slide_ul.style.left=parseInt(items_bottom_slide_ul.style.left)+speed+'px'
                        setTimeout(go,10)
                    }
                else
                {
                    pp=false;
                    items_bottom_slide_ul.style.left=newLeft+'px'
                    if (parseInt(items_bottom_slide_ul.style.left)==0)
                     {
                        items_bottom_slide_ul.style.left=-750+'px';
                     }
                     if (parseInt(items_bottom_slide_ul.style.left)==-1000)
                     {
                        items_bottom_slide_ul.style.left=-250+'px';
                     }
                }
            }
           go()
           }
           var index=1;
           function button()
           {
            for (var i = 0; i < items_bottom_buttons.length; i++) 
            {
                items_bottom_buttons[i].className='';
            }
            items_bottom_buttons[index-1].className='light';
           }
           
            var num;
            for (var i = 0; i < items_bottom_buttons.length; i++) {
                items_bottom_buttons[i].num=i;
                items_bottom_buttons[i].onclick=function()
                {
                    if (pp) {return};
                var myIndex= this.num+1;
                var offset=(myIndex-index)*-250;
                    index=myIndex;
                    if (!pp) {move(offset)};
                    button();
                }
            }
          
           Nonee.onclick=function()
           {
            if (index==3) 
           {
            index=1;
           }
           else
           {
            index++;
           }
           button();
           if (!pp) {move(-250)};
           }
           
           ti=setInterval(function(){Nonee.onclick()},2000)
           items_bottom_slide.onmouseover=function()
           {
            clearInterval(ti);
           }
           items_bottom_slide.onmouseout=function()
           {
            ti=setInterval(function(){Nonee.onclick()},2000);
           }
        }
           slide_250();
}