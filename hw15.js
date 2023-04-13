

   $(document).ready(function() {
        var array = [];

        $('#add').click(function() {
          var inputVal = $('#input').val();
          array.push(inputVal);
          $('#input').val('');
          console.log(array);
        });

        $('#dellast').click(function() {
          array.pop();
          console.log(array);
        });

        $('#delfirst').click(function() {
          array.shift();
          console.log(array);
        });

       $('#deldubl').click(function() {
  var arrays = array;
  var uniqueArray = $.unique(arrays);
  console.log(uniqueArray);
});
      });

