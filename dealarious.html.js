<script language="javascript">
    setTimeout('doBDJCheck()', 1000);

    function doBDJCheck() {
        
      //Check if the confirm checkbox exists... It's supposed to be pulled in from the other template, but on occasion it's not?!
      if ($('.order__checkout__addfields__content input').length == 0) {
        $('#bill_email_verify').after('<tr><td colspan="2"><div class="order__checkout__addfields__content"><input type="checkbox" name="BDJMailCheck" id="BDJMailCheck" class="unchecked" value="1" ><b>Confirm Subscription</b></div></td></tr>');
      }
     // $('.order__checkout__addfields__content input').attr("checked", 'checked');
    }
    $('.order__checkout__addfields__content input').live('click',function(){
        if($('.order__checkout__addfields__content input').hasClass('unchecked')){
            $('.order__checkout__addfields__content input').removeClass('unchecked');
            $('.order__checkout__addfields__content input').attr("checked", true);
            var nameVal =  $('#frmCheckout').find('input[name="fname"]').val();
            var emailVal =  $('#frmCheckout').find('input[name="email"]').val();

            if(nameVal!='' && emailVal!='' ){
               $.post('http://www.aweber.com/scripts/addlead.pl', {
                    meta_web_form_id:   '233371778',
                    meta_split_id:      '',
                    listname:           'deal-list',
                    redirect:           '',
                    meta_adtracking:    'newsletter',
                    meta_message:       '1',
                    meta_required:      'name,email',
                    meta_tooltip:       '',
                    email:              emailVal,
                    name:               nameVal
                });
            }
        }else{
              $('.order__checkout__addfields__content input').addClass('unchecked');
              $('.order__checkout__addfields__content input').attr("checked", false);
        }
    });
   
</script>