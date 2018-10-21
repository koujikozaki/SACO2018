var param = getParameter();
var dest = param['d'];



$(function () {
	$("#swCat").click(function(){
		$(this).toggleClass("active");
	//	var flg = $("#swCat").hasClass("active");
	//	alert(flg);
	});
});


$(function () {
	$("#swLetter").click(function(){
		$(this).toggleClass("active");
	});
});


$(function () {
	$("#swSmartPhone").click(function(){
		$(this).toggleClass("active");
	});
});


$(function () {
	$("#swGame").click(function(){
		$(this).toggleClass("active");
	});
});

//GETƒpƒ‰ƒ[ƒ^‚Ìˆ—
function getParameter()
{
    var result = {};
    if( 1 < window.location.search.length )
    {
        var query = window.location.search.substring( 1 );

        var parameters = query.split( '&' );

        for( var i = 0; i < parameters.length; i++ )
        {
            var element = parameters[ i ].split( '=' );

            var paramName = decodeURIComponent( element[ 0 ] );
            var paramValue = decodeURIComponent( element[ 1 ] );

            result[ paramName ] = paramValue;
        }
    }
    return result;
}

