
$.fn.getMouseSide = function (event) 
{
    var leftDiffernce = event.pageX - $(this).position().left;
    var rightDiffernce = ($(this).position().left + $(this).width()) - event.pageX;

    var topDiffernce = event.pageY - $(this).position().top;
    var bottomDiffernce = ($(this).position().top + $(this).height()) - event.pageY;

    if (leftDiffernce < rightDiffernce && leftDiffernce < topDiffernce && leftDiffernce < bottomDiffernce)
    	return 'left';
	else if (rightDiffernce < leftDiffernce && rightDiffernce < topDiffernce && rightDiffernce < bottomDiffernce)
    	return 'right';
	else if (topDiffernce < leftDiffernce && topDiffernce < rightDiffernce && topDiffernce < bottomDiffernce)
    	return 'top';
	else if (bottomDiffernce < leftDiffernce && bottomDiffernce < rightDiffernce && bottomDiffernce < topDiffernce)
    	return 'bottom';
}