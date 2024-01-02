var insert_statement = "INSERT INTO edoc_notification (receiver_id, document_id, create_date, modified_date, taken ,send_number) VALUES ";


function renderQuery(){
    let document_id = document.getElementById("document_id").value; 

    let  to_organ_domain  = document.getElementById("to_organ").value;
    
    console.log(document_id);
    
    console.log(to_organ_domain);
    
    // cắt chuỗi đoạn to này 
        let to_organ_domain_arr = to_organ_domain.split("#") ;
        
        to_organ_domain_arr = [...new Set(to_organ_domain_arr)];
    
        let values = "";
    
        to_organ_domain_arr.forEach((element,index) => {
    
            values += `("${element}"` +`,"${document_id}",`+`NOW(),NOW(),"0","0")`;
            if(index !== to_organ_domain_arr.length - 1){
                values+=",";
            }
            
        });
    
        document.getElementById("id").innerHTML=insert_statement+values;
}

var myButon = document.getElementById("render");
myButon.onclick = function(){
    renderQuery();
}



// sample usage (do not modify)
const data = [{
    id: 1,
    grade: 10
}, {
    id: 2,
    grade: 4
}, {
    id: 3,
    grade: 18
}]
console.log(getPassingTests(data))





