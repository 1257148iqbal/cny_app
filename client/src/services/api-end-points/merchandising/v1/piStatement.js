/*
  Title: PI Statement
  Description: PI Statement
  Author: Iqbal Hossain
  Date: 25-September-2022
  Modified: 25-September-2022
*/

export const PI_STATEMENT_API = {
  fetch_all_supplier_pi: `/api/reports/IPIStatements/GetAllSupplierPI`,
  fetch_supplier_pi_details_by_sp_id: id => `/api/reports/IPIStatements/GetSupplierPIDetailsBySPIID/SupplierOrder/${id}`,
  //For RDLC Report
  fetch_supplier_pi_details_by_sp_id_rdlc: id => `Reports/Merchandising/${id}/PIStatement`
};
