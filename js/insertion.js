$(document).ready(function () {
    loadAccueil();

    //loadAsyncMenu();
    // $(".menu ul a").click(function () {
    //     //loadingEditeur($(this));
    // });
});


function loadAccueil(){
  $({}).load('Typage.html', function(data) {
      $("#container").html(data);
      // alert(data);
      // console.log(data);
      // $.each(heroes, function (index, edition) {
      //     $.each(recetteByCat, function (indexRecette, value) {
      //         createHomeAsyncRecettes(index, indexRecette, value);
      //     });
      // })
  });
}
