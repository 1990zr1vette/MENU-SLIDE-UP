
var speed1 = 500;
var speed2 = 250;
var space = 0;

$('.hassubmenu').hover(
	function(event)
	{
        var submenucontainer = $(this).find('.submenu-container');
        var submenu = $(this).find('.sub-menu');

        var height = $(this).height() + $(submenucontainer).height() + $(submenu).height() + space;
        $(submenucontainer).css('height',height);
        $(submenucontainer).css('top','-' + $(this).height() + 'px');
        $(submenucontainer).css('display','block');

        $(submenu).css('top',$(submenucontainer).height() - $(submenu).height());

        $(submenu).addClass('scale').stop().animate({top:$(this).height() - 1},speed1,function()
        {
            $(submenu).removeClass('scale');
        });

        $(submenucontainer).stop().animate({height:$(this).height() + $(submenu).height()},speed1);
	},
	function(event)
	{
	}
);


$('.submenu-container').hover(
    function(event)
    {
    },
    function(event)
    {
        var submenu = $(this).find('.sub-menu');
        $(this).css('height',$(submenu).height()).css('top',0);
        $(submenu).css('top',0);
        $(this).stop().animate({height:0},speed2);
    }
);


