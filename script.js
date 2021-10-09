function compute()
{
   // p = document.getElementById("principal").value;
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate /100;
    //var year = new Date().getFullYear()+parseInt(years);
    var year = new Date().getFullYear();
    var amount = principal + interest;

    // Output string
    var outstr = "If you deposit " + "<mark>" + principal + "</mark>," + "<br/>" +
                 "at an interest rate of " + "<mark>" + rate + "</mark>." + "<br/>" + 
                 "You will receive an amount of "  + "<mark>"+ amount + "</mark>," + "<br/>" +
                 "in the year "  + "<mark>" + year + "</mark>.";
    if (isNaN(principal)){
        //alert("Enter a positive number");
        alert(outstr);
        document.getElementById("principal").focus();
    } else {
        document.getElementById("result").innerHTML = outstr;
        
    }

}

function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}
        
