$(document).ready(function(){
    //========VARIABLES=========
    var seccion = 1;
    
    //==========================
    
    openPage($("#inicio"));

    $("#btn-inicio").on('click', function(){
        cambioPagina(1);
    });
    $("#btn-servicios").on('click', function(){
        cambioPagina(2);
    });
    $("#btn-entradas").on('click', function(){
        cambioPagina(3);
    });
    $("#btn-sponsors").on('click', function(){
        cambioPagina(4);
    });
    $("#btn-about-as").on('click', function(){
        cambioPagina(5);
    });

    //========FUNCTIONS=========

    function closePage(page){
        console.log(page);
        $(page).animate({
            opacity: 0
        }, 1500);
        $(page).removeClass("active");
        $(page).addClass("inactive");
    }

    function openPage(page){
        console.log(page);
        $(page).removeClass("inactive");
        $(page).addClass("active");
        $(page).animate({
            opacity: 1
        }, 1500);
    }

    function cambioPagina(pageSelected){
        if(pageSelected == seccion){
        
        }else{
            var pageActive;
            //Close page active            
            switch(seccion){
                case 1:
                    pageActive = $("#inicio");
                    closePage(pageActive);
                break;
                case 2:
                    pageActive = $("#servicios");
                    closePage(pageActive);
                break;
                case 3:
                    pageActive = $("#entradas");
                    closePage(pageActive);
                break;
                case 4:
                    pageActive = $("#sponsors");
                    closePage(pageActive);
                break;
                case 5:
                    pageActive = $("#about-as");
                    closePage(pageActive);
                break;
            }
            seccion = pageSelected;

            //Open page selected
            switch(pageSelected){
                case 1:
                    pageActive = $("#inicio");
                    openPage(pageActive);
                break;
                case 2:
                    pageActive = $("#servicios");
                    openPage(pageActive);
                break;
                case 3:
                    pageActive = $("#entradas");
                    openPage(pageActive);
                break;
                case 4:
                    pageActive = $("#sponsors");
                    openPage(pageActive);
                break;
                case 5:
                    pageActive = $("#about-as");
                    openPage(pageActive);
                break;
            }
        } 
    }

    //==========================
});