export enum Status {
    active = "active",
    inactive = "inactive"
}


// tracerService.trace(":::::::::::::FUNCTION PARSE GROOVY STARTED::::::::::::::::")

// def orderId             = INPUTS["ORDER_ID"]

// if(orderId == null || orderId == "null" || orderId == ""){
//     throw new Exception("Order ID is missing - unexpected input.")
// }else{
//     OUTPUTS["ORDER_ID"] = orderId

// }

// //---------------------MYSQL DATASOURCE CONNECTION--------------------------------------------------------

//     Connection connection_mysql = null
//     def mysql_dataSource  = PROPERTY["RTAP_MYSQL_DATASOURCE_SID"]

//     if(mysql_dataSource == null || mysql_dataSource.isEmpty())
//     {
//         throw new Exception("Internal Runbook Error: Action task property MYSQL_DATASOURCE empty.")
//     }

//     connection_mysql=JDBCUtility.getInstance().getDBConnection(mysql_dataSource);

//     if(connection_mysql == null || connection_mysql == "")
//     {
//         throw new Exception("Internal Runbook Error: Connection mysql is empty.")
//     }

//     conn = Sql.newInstance(connection_mysql)

//     def query = "SELECT * FROM rtap.hlx_order_details where order_ID = '"+orderId+"' order by version DESC;"


// tracerService.trace(":::::::::::::FUNCTION PARSE GROOVY END!!!   ::::::::::::::::")

// println("query executed");

// println(query);
// conn.rows(query).each {row ->
// println "$row.vc_id"        
// }




// println(data);

// println("9999900000");