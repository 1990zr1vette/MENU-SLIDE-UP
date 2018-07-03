
var speed = 500;
var space = 100;

$('.hassubmenu').hover(
	function(event)
	{
        var submenucontainer = $(this).find('.submenu-container');
        var submenu = $(this).find('.sub-menu');

        var height = $(this).height() + $(submenucontainer).height() + $(submenu).height() + space;
        $(submenucontainer).css('height',height);
        $(submenucontainer).css('top','-' + $(this).height() + 'px');
        $(submenucontainer).css('display','block');

        $(submenu).css('top',$(submenucontainer).height() - $(submenu).height() );

        $(submenu).stop().animate({top:$(this).height() - 1},speed);
        $(submenucontainer).stop().animate({height:$(this).height() + $(submenu).height()},speed);
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
        $(this).stop().animate({height:0},speed);
    }
);


