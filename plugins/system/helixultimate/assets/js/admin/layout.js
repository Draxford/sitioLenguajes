/**
 * @package Helix Ultimate Framework
 * @author JoomShaper https://www.joomshaper.com
 * @copyright Copyright (c) 2010 - 2021 JoomShaper
 * @license http://www.gnu.org/licenses/gpl-2.0.html GNU/GPLv2 or Later
 */
jQuery((function(t){function e(){let e=-1,n=-1;t("#hu-layout-builder").sortable({placeholder:"ui-state-highlight",forcePlaceholderSize:!0,axis:"y",opacity:1,tolerance:"pointer",start(t,o){e=o.item.index()},stop(t,a){n=a.item.index(),e!==n&&(o(),Joomla.HelixToaster.success("Rows position changed!","Layout Settings"))}}).disableSelection(),t(".hu-layout-section").find("[data-hu-layout-row]").rowSortable()}function o(){var e;t("#layout").val(JSON.stringify((e=[],t("#hu-layout-builder").find(".hu-layout-section").each((function(o){var n=t(this),a=o,i=n.data();delete i.sortableItem;var l=n.find(".hu-column-layout.active").data("layout"),s=12;12!=l&&(s=l.split(",").join("")),e[a]={type:"row",layout:s,settings:i,attr:[]},n.find(".hu-layout-column").each((function(o){var n=o,i=t(this).data();delete i.sortableItem,e[a].attr[n]={type:"sp_col",settings:i}}))})),e))).trigger("change")}t(document).on("click",".hu-add-columns",(function(e){e.preventDefault(),e.stopPropagation(),t(this).closest("li").find(".hu-column-list").slideToggle(300)})),t(document).on("click",".hu-column-layout:not(.hu-layout-custom-btn)",(function(){t(this).closest(".hu-column-list").slideUp(300)})),t.fn.rowSortable=function(){let e=-1,n=-1;t(this).sortable({placeholder:"ui-state-highlight",forcePlaceholderSize:!0,axis:"x",opacity:1,tolerance:"pointer",start(o,n){t(".hu-layout-section [data-hu-layout-row]").find(".ui-state-highlight").addClass(t(n.item).attr("class")),t(".hu-layout-section [data-hu-layout-row]").find(".ui-state-highlight").css("height",t(n.item).outerHeight()),e=n.item.index()},stop(t,a){n=a.item.index(),e!==n&&(o(),Joomla.HelixToaster.success("Columns position changed!","Layout Settings"))}}).disableSelection()},e(),t.fn.setInputValue=function(e){"checkbox"==this.attr("type")?"1"==e.field?this.attr("checked","checked"):this.removeAttr("checked"):this.hasClass("input-select")?(this.val(e.field),this.trigger("liszt:updated"),this.trigger("chosen:updated")):this.hasClass("input-media")?(e.field&&($imgParent=this.parent(".media"),$imgParent.find("img.media-preview").each((function(){t(this).attr("src",layoutbuilder_base+e.field)}))),this.val(e.field)):this.val(e.field),"column_type"==this.data("attrname")&&"component"==this.val()&&t(".form-group.name").hide()},t.fn.getInputValue=function(){return"checkbox"==this.attr("type")?this.prop("checked")?"1":"0":this.val()},t.fn.initColorPicker=function(){Joomla.initColorPicker(this.find(".minicolors"))},t(document).on("click",".hu-row-options",(function(e){e.preventDefault(),t(this).helixUltimateOptionsModal({flag:"row-setting",title:"<span class='fas fa-cogs hu-mr-2'></span> Row Options",class:"hu-modal-small"}),t(".hu-layout-section").removeClass("row-active"),$parent=t(this).closest(".hu-layout-section"),$parent.addClass("row-active"),t("#hu-row-settings").find("select.hu-input").each((function(){t(this).chosen("destroy")}));var o=t("#hu-row-settings").clone(!0);o.find(".hu-input-color").each((function(){t(this).addClass("minicolors")})),o.find("select.hu-input").each((function(){t(this).chosen({width:"100%"})})),(o=t(".hu-options-modal-inner").html(o.removeAttr("id").addClass("hu-options-modal-content"))).find(".hu-input").each((function(){var e=t(this),o=$parent.data(e.data("attrname"));if(e.setInputValue({field:o}),e.hasClass("hu-input-media")&&o){e.prev(".hu-image-holder").html('<img src="'+e.data("baseurl")+o+'" alt="">');let t=e.siblings(".hu-media-clear");t.hasClass("hide")&&t.removeClass("hide")}})),o.initColorPicker()})),t(document).on("click",".hu-column-options",(function(e){e.preventDefault(),t(this).helixUltimateOptionsModal({flag:"column-setting",title:"<span class='fas fa-cog'></span> Column Options",class:"hu-modal-small"}),t(".hu-layout-column").removeClass("column-active"),$parent=t(this).closest(".hu-layout-column"),$parent.addClass("column-active"),t("#hu-column-settings").find("select.hu-input").each((function(){t(this).chosen("destroy")}));var o=t("#hu-column-settings").clone(!0);o.find(".hu-input-color").each((function(){t(this).addClass("minicolors")})),o=t(".hu-options-modal-inner").html(o.removeAttr("id").addClass("hu-options-modal-content"));var n=!0;o.find(".hu-input").each((function(){var e=t(this),o=e.data("attrname"),a=$parent.data(e.data("attrname"));e.setInputValue({field:a}),("name"==o&&"right"==a||"name"==o&&"left"==a)&&(n=!1),n&&"sticky_position"==o&&(e.prop("checked")&&e.prop("checked",!1),e.closest(".control-group").hide())})),o.find("select.hu-input").each((function(){t(this).chosen({width:"100%"})})),o.initColorPicker(),t('select[data-attrname="name"]').chosen().on("change",(function(){var e=t(this).val();"right"==e||"left"==e?t(this).closest(".control-group").next().show():(t(this).closest(".control-group").next().hide(),t(this).closest(".control-group").next().find(".hu-input-sticky_position").prop("checked",!1))}))})),t(".hu-input-column_type").change((function(e){var n=t(this).closest(".hu-modal-content"),a=!1;if(t("#hu-layout-builder").find(".hu-layout-column").not(".column-active").each((function(e,o){if("1"==t(this).data("column_type"))return a=!0,!1})),a)return alert("Component Area Taken"),t(this).prop("checked",!1),n.children(".control-group.name").slideDown("400"),!1;t(this).attr("checked")?(t(".hu-layout-column.column-active").find(".hu-column").addClass("hu-column-component"),n.children(".control-group.name").slideUp("400")):(t("#hu-layout-builder").find(".hu-column-component").removeClass("hu-column-component"),n.children(".control-group.name").slideDown("400")),o()})),t(document).on("click",".hu-settings-apply",(function(e){switch(e.preventDefault(),t(this).data("flag")){case"row-setting":t(".hu-options-modal-content").find(".hu-input").each((function(){var e=t(this),o=t(".row-active"),n=e.data("attrname");if(o.removeData(n),"name"==n){var a=e.val();""==a||null==a?t(".row-active .hu-section-title").text("Section Header"):t(".row-active .hu-section-title").text(e.val())}o.data(n,e.getInputValue())})),t(".hu-options-modal-overlay, .hu-options-modal").remove(),t("body").removeClass("hu-options-modal-open");break;case"column-setting":var n=!1;t(".hu-options-modal-content").find(".hu-input").each((function(){var e=t(this),o=t(".column-active"),a=e.data("attrname"),i=e.val();o.removeData(a),"column_type"==a&&t(this).attr("checked")?(n=!0,t(".column-active .hu-column-title").text("Component")):"name"==a&&1!=n&&(""!=i&&null!=i||(i="none"),t(".column-active .hu-column-title").text(i)),o.data(a,e.getInputValue())})),t(".hu-options-modal-overlay, .hu-options-modal").remove(),t("body").removeClass("hu-options-modal-open");break;case"menu-row-setting":case"menu-col-setting":t(".hu-options-modal-overlay, .hu-options-modal").remove(),t("body").removeClass("hu-options-modal-open");break;default:alert("You are doing somethings wrongs. Try again")}o(),Joomla.HelixToaster.success("Changes applied successfully!","Layout Settings")})),t(document).on("click",".hu-settings-cancel, .action-hu-options-modal-close",(function(e){e.preventDefault(),t(".hu-options-modal-overlay, .hu-options-modal").remove(),t("body").removeClass("hu-options-modal-open")})),t(document).on("click",".hu-column-layout",(function(n){n.preventDefault();var a=t(this),i=a.data("type");if((!a.hasClass("active")||"custom"==i)&&"custom"!==i){var l=a.closest(".hu-column-list"),s=a.closest(".hu-layout-section"),u=l.find(".active").data("layout"),c=a.data("layout"),h=["12"];12!=u&&u.split("+"),12!=c&&(h=c.split("+"));var r=[],d=[];s.find(".hu-layout-column").each((function(e,o){r[e]=t(this).html();var n=t(this).data();d[e]="object"==typeof n?t(this).data():""})),l.find(".active").removeClass("active"),a.addClass("active");for(var m="",p=0;p<h.length;p++){var f="";"object"!=typeof d[p]?d[p]={grid_size:h[p].trim(),column_type:0,name:"none"}:d[p].grid_size=h[p].trim(),t.each(d[p],(function(t,e){f+=" data-"+t+'="'+e+'"'})),m+='<div class="hu-layout-column col-'+h[p].trim()+'" '+f+">",r[p]?m+=r[p]:(m+='<div class="hu-column">',m+='<span class="hu-column-title">none</span>',m+='<a class="hu-column-options" href="#"><svg xmlns="http://www.w3.org/2000/svg" width="15" height="3" fill="none"><path fill="#020B53" fill-rule="evenodd" d="M3 1.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm6 0a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM13.5 3a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" clip-rule="evenodd" opacity=".4"/></svg></a>',m+="</div>"),m+="</div>"}$old_column=s.find(".hu-layout-column"),s.find("[data-hu-layout-row]").append(m),$old_column.remove(),e(),Joomla.HelixToaster.success("Grid pattern updated to <strong>"+h.join("+")+"</strong>","Layout Settings"),o()}})),t(document).on("click",".hu-layout-custom-btn",(function(e){e.preventDefault();t(this).closest(".hu-column-list").find(".hu-layout-custom").slideToggle(300)})),t(document).on("click",".hu-layout-custom-apply",(function(n){n.preventDefault();let a=t(this).closest(".hu-column-list").find(".hu-layout-custom-btn"),i=a.closest(".hu-column-list"),l=a.closest(".hu-layout-section"),s=i.find(".active").data("layout"),u=["12"],c=column=t(this).closest("div").find("input").val()||"12",h=["12"];12!=s&&(u=s.split("+")),12!=c&&(h=c.split("+"));var r=column.split("+");if(12!=r.reduce((function(t,e){return Number(t)+Number(e)})))return void alert("Invalid grid pattern!");h=r,a.data("layout",column).attr("data-layout",column);var d=[],m=[];l.find(".hu-layout-column").each((function(e,o){d[e]=t(this).html();var n=t(this).data();m[e]="object"==typeof n?t(this).data():""})),i.find(".active").removeClass("active"),a.addClass("active");let p="";for(let e=0;e<h.length;e++){let o="";"object"!=typeof m[e]?m[e]={grid_size:h[e].trim(),column_type:0,name:"none"}:m[e].grid_size=h[e].trim(),t.each(m[e],(function(t,e){o+=" data-"+t+'="'+e+'"'})),p+='<div class="hu-layout-column col-'+h[e].trim()+'" '+o+">",d[e]?p+=d[e]:(p+='<div class="hu-column">',p+='<span class="hu-column-title">none</span>',p+='<a class="hu-column-options" href="#"><svg xmlns="http://www.w3.org/2000/svg" width="15" height="3" fill="none"><path fill="#020B53" fill-rule="evenodd" d="M3 1.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm6 0a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM13.5 3a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" clip-rule="evenodd" opacity=".4"/></svg></a>',p+="</div>"),p+="</div>"}$old_column=l.find(".hu-layout-column"),l.find("[data-hu-layout-row]").append(p),$old_column.remove(),e(),Joomla.HelixToaster.success("Grid pattern updated to <strong>"+h.join("+")+"</strong>","Layout Settings"),o(),a.closest(".hu-column-list").slideUp(300)})),t(document).on("click",".hu-add-row",(function(n){n.preventDefault();var a=t(this).closest(".hu-layout-section"),i=t("#hu-layout-section").clone(!0);i.addClass("hu-layout-section").removeAttr("id"),t(i).insertAfter(a),e(),Joomla.HelixToaster.success("New row added!","Layout Settings"),o()})),t(document).on("click",".hu-remove-row",(function(e){e.preventDefault(),1==confirm("Click Ok button to delete Row, Cancel to leave.")&&t(this).closest(".hu-layout-section").slideUp(500,(function(){t(this).remove(),Joomla.HelixToaster.error("Row is removed!","Layout Settings"),o()}))})),t(document).on("click",".remove-media",(function(){t(this).parent(".media").find("img.media-preview").each((function(){t(this).attr("src",""),t(this).closest(".image-preview").css("display","none")})),o()}))}));