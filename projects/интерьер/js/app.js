"use strict";
 $(document).ready(function(e){
     //SCROLL TOP
     $("#scrollTop").click(function (e) {
         e.preventDefault();
         $('html, body').animate({
             scrollTop: 0
         }, 1000);
     });

     // Modal
     $(".open-modal").click(function () {
         $(".modal_overlay").show();
         $("#modal_form").show(300);
     });

	 if ($('#calculate_block').length){
		 $('#calculate_block').find('input[name="name_design"]').val($('#name_design').text());
	 }
     var example_slider, team_slider, accordion_box, lg_box, lg_video, body;
     body = $('body');
     accordion_box = $('.accordion_box');
     example_slider = $('.example_slider');
     team_slider = $('.team_slider');
     lg_box = $('.lg_box');
     lg_video = $('.lg_video');

	
	setTimeout(function() { 
		var roistatNum = $('.roistat-promo').text();
		$('form').append('<input type="hidden" name="roistat" value="'+ roistatNum +'">'); 
		}, 300);
	
     $(document).on('click', '.btn_go_to', function(e){
         var $this, data_href, obj, negative_height;
         negative_height = $('#stick_block').outerHeight();
         $this = $(this);
         data_href = $this.attr('href') ? $this.attr('href') : $this.attr('data-href');
         obj = $(data_href).eq(0);
         if($this.hasClass('non_negative')) {negative_height = 0;}

         if(obj.length){
             e.preventDefault();
             e.stopPropagation();

             $('html, body').dequeue().stop().animate({scrollTop: parseFloat(obj.offset().top) - negative_height}, 1000);
         } else {
             return 0;
         }
     });

     $(document).on('click', '.color_unit', function(){
         var $this, filter_box, floor_color, wall_color, src;
         $this = $(this);
         filter_box = $this.closest('.filter_box');
         floor_color = '1-' + filter_box.find('input[name=floor_color]:checked').val();
         wall_color = '2-' + filter_box.find('input[name=wall_color]:checked').val();
         src = "img/designer/" + floor_color +  wall_color + '.jpg';
         filter_box.closest('.designer').find('.designer_cover img').attr('src', src);
     });
	 
	 





     if(example_slider.length){
         example_slider.owlCarousel({
             items : 1,
             loop : true,
             center : true,
             mouseDrag : false,
             nav : true,
             dots : false,
             lazyLoad : true,
             autoplay : true,
             smartSpeed: 1200,
             autoplayHoverPause : true,
             mergeFit : false,
             stagePadding: 0,
             fluidSpeed : 2000,
             responsiveRefreshRate:500,
             responsive : {
                 700: {
                     items: 3,
                     dots: true
                 },
                 600: {
                     items: 3
                 }
             }
         });
     }

     if(team_slider.length){
         team_slider.owlCarousel({
             items : 1,
             loop : true,
             center : true,
             mouseDrag : false,
             nav : true,
             dots : false,
             lazyLoad : true,
             autoplay : true,
             smartSpeed: 1200,
             autoplayHoverPause : true,
             mergeFit : false,
             stagePadding: 0,
             fluidSpeed : 2000,
             responsiveRefreshRate:500,
             responsive : {
                 700: {
                     items: 3
                 },
                 400: {
                     items: 2
                 }
             }
         });
     }

     if(lg_box.length) {
         lg_box.lightGallery({
             thumbnail:true,
             animateThumb: false,
             showThumbByDefault: false,
             selector: '.item',
             youtubePlayerParams: {
                 modestbranding: 1,
                 showinfo: 0,
                 rel: 0,
                 controls: 1
             }
         });
     }

     if(lg_video.length) {
         lg_video.lightGallery({
             thumbnail:true,
             animateThumb: false,
             showThumbByDefault: false,
             selector: this,
             youtubePlayerParams: {
                 modestbranding: 1,
                 showinfo: 0,
                 rel: 0,
                 controls: 1
             }
         });
     }
     if(accordion_box.length) {
         accordion_box.accordion({
             active: false,
             collapsible: true
         });
     }

     $(window).on('resize', function(){
         if(accordion_box.length) {
             accordion_box.accordion('refresh');
         }
     });

     var filter_accordion;
     filter_accordion = $('.filter_accordion');

     if(filter_accordion.length) {
         filter_accordion.accordion({
             active: false,
             collapsible: true
         });
     }

     /*tabs*/
     $(document).on('click', '.btn_tab', function(e){
         e.stopPropagation();
         e.preventDefault();
         var $this, tab_box, tab_content, btn_tab, data_tab, obj;
         $this = $(this);
         data_tab = $this.attr('data-tab');
         tab_box = $this.closest('.tab_box');
         obj = tab_box.find('.' + data_tab);
         tab_content = tab_box.find('.content_tab');
         btn_tab = tab_box.find('.btn_tab');
         if($this.hasClass('tab_active')){
             return 0;
         } else {
             btn_tab.add(tab_content).removeClass('tab_active');
             $this.add(obj).addClass('tab_active');
         }
     });

     $(window).on('load scroll resize', function(){
         sticking('#stick_block', '.nav_anchor', 1);
     });

     /*menu*/
     $(document).on('click', '.btn_menu', function(){
         body.addClass('menu_active');
     });
     $(document).on('click', '.btn_menu_close', function(){
         body.removeClass('menu_active');
     });
     $(document).on('click', '.menu_active', function(event){
         var e_target;
         e_target = $(event.target);
         if(e_target.closest('.btn_menu').length || e_target.closest('.btn_menu_close').length || e_target.closest('.nav').length){
             return 0;
         } else {
             body.removeClass('menu_active');
         }
     });
     $(document).on('click', '.menu a', function(){
         body.removeClass('menu_active');
     });

     $(document).on('click', '.calculate_item', function(){
         var i, select;
         i = $(this).index();
         select = $('#style_design_select');
         if(select.length) {
             select.find('option').eq(i).prop('selected', true);
         }
     });


     modals_init();

     if($('input[type=tel]').length){
         $('input[type=tel]').mask("(999) 999-99-99");
     }

     var input_num;
     input_num = $(".input_num");
     if(input_num.length){
         input_num.mask('00000');
         input_num.on('input',function(){
             var $this, value;
             $this = $(this);
             value = $this.val();
             if(value.length > 1 && value[0]==='0'){
                 value = value.slice(1);
                 $this.val(value);
             }
             if(value.length === 0){
                 $this.val('0');
             }

         });
         input_num.on('change',function(){
             var $this, value, min, max;
             $this = $(this);
             min = $this.attr('data-min');
             max = $this.attr('data-max');
             if ( has_attr (min)){
                 min = parseInt(min, 10)
             } else {
                 min = undefined;
             }
             if ( has_attr (max)){
                 max = parseInt(max, 10)
             } else {
                 max = undefined;
             }
             if (min !== undefined && $this.val() < min) {
                 $this.val(min);
             }
             if (max !== undefined && $this.val() > max) {
                 $this.val(max);
             }
         });
     }



     $(document).on('focus', '.invalid', function(){
         $(this).removeClass('invalid');
     });

   function modals_init() {
         var modal_win_top, modal_overlay, modal_thank, modal_form;
         modal_overlay = $('#modal_overlay');
         modal_thank = $('#modal_thank');
         modal_form = $('#modal_form');
		 
		$('.btn_user').on('click', function(){
			yaCounter48398150.reachGoal('CHOOSE_STYLE');
		});
		
		$(document).on('click', '.btn_get_modal_form', function(e){
			e.stopPropagation();
			e.preventDefault();

			// var modal_form = $('#modal_form');
			center_modal(modal_form);
			// center_modal(modal_thank);
		});
         $(document).on('submit', ".send_form", function () {
             var $this, form_data, thank, data_action;
             $this = $(this);
             thank = modal_thank;
             data_action = $this.attr('data-action');
			 var target = $this.attr('data-yaTarget');
			 yaCounter48398150.reachGoal(target);
             form_data = new FormData($this[0]);
             if (is_empty($this)) {
                 $.ajax({
                     type: "POST",
                     url: data_action,
                     data: form_data,
                     contentType:false,
                     processData:false,
                     success: function (res) {
                         var modal_wrapper ;
                         modal_wrapper  =  $this.closest('.modal_wrapper');
                         if(modal_wrapper.length) {
                             center_modal(modal_wrapper);
                             modal_wrapper.fadeOut(200);
                         }
                         $this.trigger('reset');
                         center_modal(thank);
                         var timing = setTimeout(function(){modal_to_close(thank); clearTimeout(timing);}, 3000);
                     }
                 });
             }
             return false;
         });


         $(document).on('click', '.modal_close', function () {
             var obj = $(this).closest('.modal_wrapper');
             modal_to_close(obj);
         });

         $(document).on('click', '#modal_overlay', function (e) {
             $('html, body').removeAttr('style');
             $('.modal_wrapper').add('#modal_overlay').fadeOut(200);
         });

         $(document).on('click', '.modal_wrapper', function (e) {
             var e_target, $this;
             e_target = $(e.target);
             $this = $(this);
             if (e_target.closest('.modal_block').length === 0) {
                 modal_to_close($this);
             }
         });

         $(document).on('click', '.btn_get_modal', function (e) {
             var $this, data_id, obj, data_title, data_btn_text, data_send_text, univ_title, univ_btn, input_info;
             e.preventDefault();
             e.stopPropagation();
             $this = $(this);
             data_id = $this.attr('data-id');
             data_title = $.trim($this.attr('data-title'));
             data_btn_text = $.trim($this.attr('data-btn-text'));
             data_send_text = $.trim($this.attr('data-send-text'));

             data_title = data_title ? data_title : "Заказ обратного звонка";
             data_btn_text = data_btn_text ? data_btn_text : "Заказать обратный звонок";
             data_send_text = data_send_text ? data_send_text : "Не определено";

             obj = $(data_id);
             univ_title = obj.find('.univ_title');
             univ_btn = obj.find('.univ_btn');
             input_info = obj.find("input[name=info]");

             if (obj.length) {
                 if (univ_title.length) {
                     univ_title.html(data_title);
                 }
                 if (univ_btn.length) {
                     univ_btn.text(data_btn_text);
                 }
                 if (input_info.length) {
                     input_info.val(data_send_text);
                 }
                 modal_overlay.fadeOut(200);
                 center_modal(data_id);
             }
         });

         function modal_to_close(obj) {
             $('html, body').removeAttr('style');
             obj.scrollTop(0);
             obj.add(modal_overlay).fadeOut(200);
         }

         function center_modal(selector) {
             var obj, body, width_scroll;
             modal_win_top = $(window).scrollTop();
             body = $('body');
             obj = $(selector);
             width_scroll = 0;
             if (obj.length == 0) {
                 console.log('объект не найден');
                 return 0;
             }
             if (is_scroll()) {
                 width_scroll = calc_scroll_width();
             } else {
                 width_scroll = 0;
             }
             $('html').css({'padding-right': width_scroll + 'px'});
             $('body').css({'overflow': 'hidden'});
             obj.css({'top': modal_win_top + 'px'}).add(modal_overlay).fadeIn(200);
         }

         function is_scroll() {
             if ($(document).height() > $(window).height()) {
                 return true;
             } else {
                 return false
             }
         }
         function calc_scroll_width() {
             var hide_block, width_scroll, css_text;
             hide_block = document.createElement('div');
             css_text = "width:100%!important; height:100px; position:fixed; left:100%; top:100%; overflow:scroll;";
             hide_block.id = "hide_block";
             hide_block.setAttribute('style', css_text);
             document.body.appendChild(hide_block);
             width_scroll = parseFloat((hide_block.offsetWidth) - (hide_block.clientWidth), 10);
             hide_block.parentElement.removeChild(hide_block);
             return width_scroll;
         }
     }

     /*форма калькулятор*/

     if($('.filter_box').length) {
         var calculate_form, input_count_rooms, input_square, input_cost, all_cost, cost1, cost2, cost3;
         calculate_form = $('body');
         input_count_rooms = calculate_form.find('input[name=count_rooms]');
         input_square = calculate_form.find('input[name=square]');
         input_cost = calculate_form.find('input[name=cost]');
		 all_cost = cost1 = cost2 = cost3 = '';
         $('.filter_box input[name=square]').on('input change', function (e) {
             e.preventDefault();
             e.stopPropagation();
             var a = parseInt($(this).val(), 10);
             if (a === 0  || !a) {
                 a === 0;
             }
             if (a === 0){
                 $('#square_tag').html('');
                 input_square.val('площадь не указана');
             } else {
                 $('#square_tag').html(' площадью ' + a + ' м<sup>2</sup>');
                 input_square.val(a);
             }


             input_square.val(a);
			 cost1 = calc_cost (a, 1);
			 cost2 = calc_cost (a, 2);
			 cost3 = calc_cost (a, 3);			 
			 all_cost = '<br>Станадарт = ' + cost1  +'<br>'+'Комфорт = ' + cost2 + '<br>'+'Премиум = ' + cost3; 
             $('#cost_tag1').html(cost1);
             $('#cost_tag2').html(cost2);
             $('#cost_tag3').html(cost3);			 
			 input_cost.val(all_cost);			 
         });

         $('.filter_box input[name=count_rooms]').on('input change', function (e) {
             e.preventDefault();
             e.stopPropagation();
             var a, b ;
             b = '1';
             a = $.trim($(this).val());
             if (a === "5 и более") {
                 b = '5';
             } else {
                 b = a;
             }
             $('#num_room_tag').text(b);
             input_count_rooms.val(a);
         });
     }

    function calc_cost (square, pos) {
         var a, b, sum1, sum2;
        pos = parseInt(pos, 10);
        square = parseInt(square, 10);
        if (square === 0 || !square) {
            return ('');
        }
        switch(pos) {
            case (1):
                a = 12800; b = 15500;
                break;
            case (2):
                a = 13500; b = 16200;
                break;
            case (3):
                a = 14900; b = 25200;
                break;
        }
        sum1 = ''+(square * a);
        sum2 = ''+(square * b);
        return ('<strong>' + slice_num(sum1, 3, ' ')+'</strong> - <strong>' + slice_num(sum2, 3, ' ') + ' </strong>руб.');
    }

    function slice_num (str, num,divider) {
         var str_len, a, mas;
        str_len = str.length;
        a = parseInt(str_len / num,10);
        mas = str.split('');
        if(a){
            var i, pos_str;
            if(str_len%num){
                for (i = 1; i <= a; i++) {
                    pos_str = str_len-num*i;
                    mas.splice(pos_str, 0, divider);
                }
            } else {
                for (i = 1; i <a; i++) {
                    pos_str = str_len-num*i;
                    mas.splice(pos_str, 0, divider);
                }
            }
            str = mas.join('');
        }
        return str;
    }





     function sticking(selector,anchor,stick_mode){
         var obj, obj_wrap, obj_height, win_top,obj_anchor, space_top, mode, obj_wrap_exist;
         anchor = anchor || '';
         mode = stick_mode || 0;
         obj = $(selector).eq(0);
         obj_anchor = $(anchor).eq(0);
         if(obj_anchor.length) {
             space_top = parseInt(obj_anchor.offset().top, 10);
         } else {
             space_top = 0;
         }
         obj_wrap = obj.closest('.stick_wrap');
         obj_wrap_exist = obj_wrap.length ? 1 : 0;
         obj_height = obj.height();
         win_top = $(window).scrollTop();
         if(win_top >= space_top){
             if(mode === 0){
                 if(obj_wrap_exist){
                     //obj_wrap.css({"min-height":obj_height + "px"});
                 }
             } else {
                 if(!(obj.hasClass('stick')) && obj_wrap_exist){
                     obj_wrap.css({"min-height":obj_height + "px"});
                 }
             }
             obj.addClass('stick');
         } else {
             obj.removeClass('stick');
         }
     }

     function is_mobile (){
         var user_agent_value = (navigator.userAgent).toLowerCase();
         return user_agent_value.match(/iPhone|iPad|iPod|android|mobile|phone/i);
     }

     function is_empty(elem) {
         var mas, objects;
         objects = elem.find('.req');
         mas = [];
         objects.each(function () {
             var $this  = $(this);
             if (is_tag($this) !== 'select'  && ($this.val().length === 0 || !$this.val().replace(/\s+/g, ''))) {
                 $this.addClass('invalid');
                 mas.push("0");
             } else if ($this.attr('type') === 'tel' && $(this).val().length !== 15) {
                 $this.addClass('invalid');
                 mas.push("0");
             } else if (($this.attr('type') === "checkbox" ||   $this.attr('type')=== "radio") && !$this.prop('checked')) {
                 $this.addClass('invalid');
                 mas.push("0");
             } else if (is_tag($this) === 'select' && $this.find('option:selected').index() === 0) {
                 $this.addClass('invalid');
                 mas.push("0");
             } else {
                 $(this).removeClass('invalid');
             }
         });
         if (mas.length == 0) return 1;
         else return 0;
     }

     function is_tag (obj) {
         return (obj.get(0).tagName).toLowerCase();
     }

     function has_attr (attr) {
         return (typeof attr !== typeof undefined && attr !== false);
     }





 });