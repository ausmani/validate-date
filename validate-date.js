 var date = $('#date_range_report_form').val();

    if(date!=""){

        try{
            var temp = date.split("-");


            if(temp[1]){
                var date1 = new Date(temp[0]);
                var date2 = new Date(temp[1]);
                var time1 = date1.getTime();
                var time2 = date2.getTime();

                if(isNaN(time1) || isNaN(time2)){
                    $('#valid_date_range_report').html('Please Enter A Valid Date (mm/dd/yy - mm/dd/yy)')
                }
                else if(date2.getTime() < date1.getTime()){
                    $('#valid_date_range_report').html('Start Date must be smaller than End Date')
                }
                else{
                    return true;
                }

            }
            else{
                $('#valid_date_range_report').html('Please Enter A Valid Date (mm/dd/yy - mm/dd/yy)')
            }

        }
        catch (e){
            console.log(e);
        }


    }