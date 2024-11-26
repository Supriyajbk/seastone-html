jQuery(document).ready(function(){
    let values = [];
    jQuery("ul.expert.tab-links li a").on("click",function(e){
        //e.preventDefault();
        console.log("expert");
        let category = jQuery(this).data('id');      
        
        jQuery.ajax({
            type: 'POST',
            url: ajax_object.ajax_url,
            data: {
                action: 'get_sub_speciality',
                category: category,
            },
            beforeSend: function(xhr) {
                xhr.setRequestHeader('Authorization', 'Bearer your-token');
                jQuery('ul#speciality').html();              
            },
            success: function (response) {
                jQuery('ul#speciality').html();  
               jQuery('ul#speciality').html(response);
              
            },
            error: function (xhr, status, error) {
                console.error('AJAX Error:', status, error);
            }
        });
    })
})