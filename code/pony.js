function resetContext()
{
    localStorage.removeItem('PoC_ctx');
    localStorage.removeItem('PoC_gotToTheEnd');
}

function loadPage(_curPage)
{
    var _ctx = localStorage.getItem("PoC_ctx"); //Current context
    var newCtx = false;

    //Is the context recovered from localStorage valid
    if (_ctx == null || isNaN(_ctx) || _ctx != parseInt(Number(_ctx)))
    {
        _ctx = 1;
        localStorage.setItem("PoC_ctx", _ctx);
    }

    //If we got to the end
    if (_curPage == 7)
    {
        localStorage.setItem("PoC_gotToTheEnd", true);
    }
    //Active page
    else if (_curPage == 4 && _ctx != 3 && localStorage.getItem("PoC_gotToTheEnd"))
    {
        localStorage.removeItem("PoC_gotToTheEnd");
        localStorage.setItem("PoC_ctx", ++_ctx);
        newCtx++;
    }

    //First 3 pages are shared
    if (_curPage < 4 && _ctx != 1)
        _ctx = 1;

    var pageName = _ctx + '_page_' + _curPage + '.jpg';

    var page = document.getElementById("pageContainer");

    //This is our own code, you'll have to update it

    if (_curPage == 1)                      //Animated image by CSS
        page.innerHTML = "<div id=\"animated1\"></div>";
    else if (_ctx == 3 && _curPage == 7)    //Page clicked reset the whole thing
        page.innerHTML = "<a href=\'p1.xhtml\' onclick=\"resetContext();\"><img src=\"Hackathon/img/" + pageName + "\"/></a>"
    else if (newCtx)                        //Transition between two branch with animation, yeah
        page.innerHTML = "<div id=\"transitionFather" + _ctx + "\"><div class=\"animated2_wait\" style=\"background-image:url('Hackathon/img/" + pageName + "')\"/></div>";
    else if (_curPage == 4)                 //Other animated image
        page.innerHTML = "<div id=\"animated2\" style=\"background-image:url('Hackathon/img/" + pageName + "')\"></div>";
    else                                     //Standard case
        page.innerHTML = "<img src=\"Hackathon/img/" + pageName + "\"/>";
}