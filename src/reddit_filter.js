javascript:(function() {

  /*  
      AUTHOR:       NSF_Zebras 

      Version:      1.0

      Description:  Filter a reddit page by content-type.

   */

  function main() { 
    
    jQuery( "div#siteTable p.title a:not(span a)" ).each( function( index, item ) { 

      var href = jQuery( item ).attr( "href" ).toLowerCase() ;
      
      if( href.indexOf( ".gif" ) == -1 && href.indexOf( "gfycat" ) == -1 ) { 
        jQuery( item ).parent().parent().parent().hide()
      }

    })  ;   

  }

  main() ; 

})();