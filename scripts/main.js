(function(win, $){
    var obj = {};

    $().ready(function(){
        init();
    });

    var init = function(){

        //set event handlers
        setSideNavToggleHandler();
        setPrintIconHandler();

        //set charts
        setChart1_1();
        setChart1_2();
        setChart2_1();
        setChart2_2();
    };

    //--------------------------------------
    // Event handlers
    //--------------------------------------
    var setSideNavToggleHandler = function(){
        //set event handler for side nav toggle
        $('div.brand-container i.fa-bars').on('click', function(){
            toggleSideNav();
        });
    };

    var setPrintIconHandler = function(){
        //set event handler for side nav toggle
        $('div.nav-items span.fa-print').on('click', function(){
            printWindow();
        });
    };

    //--------------------------------------
    // Workers
    //--------------------------------------
    var toggleSideNav = function(){
        var side = $('div.sidenav');
        var main = $('div.main-content');
        var sideWidth = side.width();

        if(sideWidth === 50){
            side.animate({
                width:280
            }, 750, function(){});

            main.animate({
                left:280
            }, 750, function(){});
        }else{
            side.animate({
                width:50
            }, 750, function(){});
            main.animate({
                left:50
            }, 750, function(){});
        }
    };

    var printWindow = function(){
        win.print();
    };

    var setChart1_1 = function(){
        var data = getChartData1();
        var cnvFT = document.getElementById('cnv-failed-tests');
        var chartFailedTests = new Chart(cnvFT, {
            type: 'doughnut',
            data: data
        });

    };

    var setChart1_2 = function(){
        var data = getChartData2();
        var cnvPP = document.getElementById('cnv-pass-percent');
        var chartPassedPercent = new Chart(cnvPP, {
            type: 'doughnut',
            data: data
        });
    };

    var setChart2_1 = function(){
        var data = getChartData1();
        var cnvFT = document.getElementById('cnv-failed-tests2');
        var chartFailedTests = new Chart(cnvFT, {
            type: 'doughnut',
            data: data
        });

    };

    var setChart2_2 = function(){
        var data = getChartData2();
        var cnvPP = document.getElementById('cnv-pass-percent2');
        var chartPassedPercent = new Chart(cnvPP, {
            type: 'doughnut',
            data: data
        });
    };

    //--------------------------------------
    // Data
    //--------------------------------------
    var getChartData1 = function(){
        var data = {
            labels: [],
            datasets: [
            {
                data: [12,0],
                backgroundColor: [
                    "#ff0000",
                    "#00a000"
                ]
            }]
        };
        return data;
    };

    var getChartData2 = function(){     
        var data = {
            labels: [],
            datasets: [
            {
                data: [37,63],
                backgroundColor: [
                    "#ff0000",
                    "#00a000"
                ]
            }]
        };
        return data;
    };

})(window, jQuery);