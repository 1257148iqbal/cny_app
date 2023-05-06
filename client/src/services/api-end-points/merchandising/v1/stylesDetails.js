/*
  Title: stylesDetails
  Description: stylesDetails.js
  Author: Iqbal Hossain
  Date: 04-August-2022
  Modified: 04-August-2022
*/

export const STYLES_DETAILS_API = {
  fetch_All_Buyer: '/api/reports/StyleDetails/GetAllBuyer',
  fetch_buyers: '/api/merchandising/buyers',
  fetch_department_by_buyer: buyerId => `/api/reports/StyleDetails/GetDepartment/Buyer/${buyerId}`,
  fetch_style_by_buyer: buyerId => `/api/reports/StyleDetails/GetStyle/Buyer/${buyerId}`,
  fetch_year_by_department: buyerDepartmentId => `/api/reports/StyleDetails/GetYear/Department/${buyerDepartmentId}`,
  fetch_season_by_buyer_department_year: ( buyerId, buyerDepartmentId, year ) => `/api/reports/StyleDetails/GetSeason/Buyer/${buyerId}/Department/${buyerDepartmentId}/Year/${year}`,
  fetch_style_by_buyer_department_year_season: ( buyerId, buyerDepartmentId, year, season ) => `/api/reports/StyleDetails/GetStyle/Buyer/${buyerId}/Department/${buyerDepartmentId}/Year/${year}/Season/${season}`,
  fetch_styleDetails_by_style: styleId => `/api/reports/StyleDetails/GetStyleDetails/Style/${styleId}`,

  // For RDLC Report
  fetch_styleDetails_by_styleId_rdlc: styleId => `Reports/Merchandising/StyleDetails/${styleId}/Style`
};