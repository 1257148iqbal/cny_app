/*
  > Title: Permission Types for Application
  > Description: 
  > Author: Iqbal Hossain
  > Date: 2021-10-10
*/

export const USERS = {
  CREATE: 'Permissions.Users.Create',
  EDIT: 'Permissions.Users.Edit',
  DELETE: 'Permissions.Users.Delete',
  VIEW: 'Permissions.Users.View',
  USER_INFO_INSPECTION: 'Permissions.Users.UserInfoInspection'
};

export const ROLE = {
  CREATE: 'Permissions.Roles.Create',
  EDIT: 'Permissions.Roles.Edit',
  DELETE: 'Permissions.Roles.Delete',
  VIEW: 'Permissions.Roles.View'
};

export const UNITS = {
  CREATE: 'Permissions.Units.Create',
  EDIT: 'Permissions.Units.Edit',
  DELETE: 'Permissions.Units.Delete',
  VIEW: 'Permissions.Units.View',
  ARCHIVE: 'Permissions.Units.Archive',
  RETRIEVE: 'Permissions.Units.Retrieve'
};

export const DESIGNATIONS = {
  CREATE: 'Permissions.Designations.Create',
  EDIT: 'Permissions.Designations.Edit',
  DELETE: 'Permissions.Designations.Delete',
  VIEW: 'Permissions.Designations.View',
  ARCHIVE: 'Permissions.Designations.Archive',
  RETRIEVE: 'Permissions.Designations.Retrieve'
};

export const OPERATION_GROUPS = {
  CREATE: 'Permissions.OperationGroups.Create',
  EDIT: 'Permissions.OperationGroups.Edit',
  DELETE: 'Permissions.OperationGroups.Delete',
  VIEW: 'Permissions.OperationGroups.View',
  ARCHIVE: 'Permissions.OperationGroups.Archive',
  RETRIEVE: 'Permissions.OperationGroups.Retrieve'
};

export const OPERATOR_DUTY_LOG = {
  CREATE: 'Permissions.OperatorDutyLogs.Create',
  EDIT: 'Permissions.OperatorDutyLogs.Edit',
  DELETE: 'Permissions.OperatorDutyLogs.Delete',
  VIEW: 'Permissions.OperatorDutyLogs.View',
  ARCHIVE: 'Permissions.OperatorDutyLogs.Archive',
  RETRIEVE: 'Permissions.OperatorDutyLogs.Retrieve',
  LOCK: 'Permissions.OperatorDutyLogs.Lock',
  UNLOCK: 'Permissions.OperatorDutyLogs.Unlock'
};

export const OPERATORS = {
  CREATE: 'Permissions.Operators.Create',
  EDIT: 'Permissions.Operators.Edit',
  DELETE: 'Permissions.Operators.Delete',
  VIEW: 'Permissions.Operators.View',
  ARCHIVE: 'Permissions.Operators.Archive',
  RETRIEVE: 'Permissions.Operators.Retrieve'
};

export const OPERATOR_GROUPS = {
  CREATE: 'Permissions.OperatorGroups.Create',
  EDIT: 'Permissions.OperatorGroups.Edit',
  DELETE: 'Permissions.OperatorGroups.Delete',
  VIEW: 'Permissions.OperatorGroups.View',
  ARCHIVE: 'Permissions.OperatorGroups.Archive',
  RETRIEVE: 'Permissions.OperatorGroups.Retrieve'
};

export const SHIFTS = {
  CREATE: 'Permissions.Shifts.Create',
  EDIT: 'Permissions.Shifts.Edit',
  DELETE: 'Permissions.Shifts.Delete',
  VIEW: 'Permissions.Shifts.View',
  ARCHIVE: 'Permissions.Shifts.Archive',
  RETRIEVE: 'Permissions.Shifts.Retrieve'
};

export const SWITCHES = {
  CREATE: 'Permissions.Switches.Create',
  EDIT: 'Permissions.Switches.Edit',
  DELETE: 'Permissions.Switches.Delete',
  VIEW: 'Permissions.Switches.View',
  ARCHIVE: 'Permissions.Switches.Archive',
  RETRIEVE: 'Permissions.Switches.Retrieve'
};

export const SWITCH_LOGS = {
  CREATE: 'Permissions.SwitchLogs.Create',
  EDIT: 'Permissions.SwitchLogs.Edit',
  DELETE: 'Permissions.SwitchLogs.Delete',
  VIEW: 'Permissions.SwitchLogs.View',
  ARCHIVE: 'Permissions.SwitchLogs.Archive',
  RETRIEVE: 'Permissions.SwitchLogs.Retrieve',
  LOCK: 'Permissions.SwitchLogs.Lock',
  UNLOCK: 'Permissions.SwitchLogs.Unlock'
};

export const SECTIONS = {
  CREATE: 'Permissions.Sections.Create',
  EDIT: 'Permissions.Sections.Edit',
  DELETE: 'Permissions.Sections.Delete',
  VIEW: 'Permissions.Sections.View',
  ARCHIVE: 'Permissions.Sections.Archive',
  RETRIEVE: 'Permissions.Sections.Retrieve'
};

export const TAGS = {
  CREATE: 'Permissions.Tags.Create',
  EDIT: 'Permissions.Tags.Edit',
  DELETE: 'Permissions.Tags.Delete',
  VIEW: 'Permissions.Tags.View',
  ARCHIVE: 'Permissions.Tags.Archive',
  RETRIEVE: 'Permissions.Tags.Retrieve'
};

export const FACTORS = {
  CREATE: 'Permissions.Factors.Create',
  EDIT: 'Permissions.Factors.Edit',
  DELETE: 'Permissions.Factors.Delete',
  VIEW: 'Permissions.Factors.View',
  ARCHIVE: 'Permissions.Factors.Archive',
  RETRIEVE: 'Permissions.Factors.Retrieve'
};

export const DAILY_DATA_SHEETS = {
  CREATE: 'Permissions.DailyDataSheets.Create',
  EDIT: 'Permissions.DailyDataSheets.Edit',
  DELETE: 'Permissions.DailyDataSheets.Delete',
  VIEW: 'Permissions.DailyDataSheets.View',
  ARCHIVE: 'Permissions.DailyDataSheets.Archive',
  RETRIEVE: 'Permissions.DailyDataSheets.Retrieve',
  LOCK: 'Permissions.DailyDataSheets.Lock',
  UNLOCK: 'Permissions.DailyDataSheets.Unlock'
};

export const DAILY_DATA_SHEET_SETTINGS = {
  CREATE: 'Permissions.DailyDataSheetSettings.Create',
  EDIT: 'Permissions.DailyDataSheetSettings.Edit',
  DELETE: 'Permissions.DailyDataSheetSettings.Delete',
  VIEW: 'Permissions.DailyDataSheetSettings.View',
  ARCHIVE: 'Permissions.DailyDataSheetSettings.Archive',
  RETRIEVE: 'Permissions.DailyDataSheetSettings.Retrieve'
};

export const DAILY_PRODUCTIONS = {
  CREATE: 'Permissions.DailyProductions.Create',
  EDIT: 'Permissions.DailyProductions.Edit',
  DELETE: 'Permissions.DailyProductions.Delete',
  VIEW: 'Permissions.DailyProductions.View',
  ARCHIVE: 'Permissions.DailyProductions.Archive',
  RETRIEVE: 'Permissions.DailyProductions.Retrieve',
  MONTHLY: 'Permissions.DailyProductions.Monthly',
  YEARLY: 'Permissions.DailyProductions.Yearly'
};

export const DEPARTMENTS = {
  CREATE: 'Permissions.Departments.Create',
  EDIT: 'Permissions.Departments.Edit',
  DELETE: 'Permissions.Departments.Delete',
  VIEW: 'Permissions.Departments.View',
  ARCHIVE: 'Permissions.Departments.Archive',
  RETRIEVE: 'Permissions.Departments.Retrieve'
};

export const LAB_RPORTS = {
  CREATE: 'Permissions.LabReports.Create',
  EDIT: 'Permissions.LabReports.Edit',
  DELETE: 'Permissions.LabReports.Delete',
  VIEW: 'Permissions.LabReports.View',
  ARCHIVE: 'Permissions.LabReports.Archive',
  RETRIEVE: 'Permissions.LabReports.Retrieve',
  LOCK: 'Permissions.LabReports.Lock',
  UNLOCK: 'Permissions.LabReports.Unlock'
};

export const LAB_SHIFTS = {
  CREATE: 'Permissions.LabShifts.Create',
  EDIT: 'Permissions.LabShifts.Edit',
  DELETE: 'Permissions.LabShifts.Delete',
  VIEW: 'Permissions.LabShifts.View',
  ARCHIVE: 'Permissions.LabShifts.Archive',
  RETRIEVE: 'Permissions.LabShifts.Retrieve'
};

export const LAB_UNITS = {
  CREATE: 'Permissions.LabUnits.Create',
  EDIT: 'Permissions.LabUnits.Edit',
  DELETE: 'Permissions.LabUnits.Delete',
  VIEW: 'Permissions.LabUnits.View',
  ARCHIVE: 'Permissions.LabUnits.Archive',
  RETRIEVE: 'Permissions.LabUnits.Retrieve'
};

export const LOG_SHEETS = {
  CREATE: 'Permissions.LogSheets.Create',
  EDIT: 'Permissions.LogSheets.Edit',
  DELETE: 'Permissions.LogSheets.Delete',
  VIEW: 'Permissions.LogSheets.View',
  ARCHIVE: 'Permissions.LogSheets.Archive',
  RETRIEVE: 'Permissions.LogSheets.Retrieve',
  LOCK: 'Permissions.LogSheets.Lock',
  UNLOCK: 'Permissions.LogSheets.Unlock'
};

export const PRODUCTION_SETTING = {
  EDIT: 'Permissions.ProductionSettings.Edit',
  VIEW: 'Permissions.ProductionSettings.View'
};

export const TEST_SAMPLES = {
  CREATE: 'Permissions.TestSamples.Create',
  EDIT: 'Permissions.TestSamples.Edit',
  DELETE: 'Permissions.TestSamples.Delete',
  VIEW: 'Permissions.TestSamples.View',
  ARCHIVE: 'Permissions.TestSamples.Archive',
  RETRIEVE: 'Permissions.TestSamples.Retrieve'
};

export const TIME_SLOTS = {
  CREATE: 'Permissions.TimeSlots.Create',
  EDIT: 'Permissions.TimeSlots.Edit',
  DELETE: 'Permissions.TimeSlots.Delete',
  VIEW: 'Permissions.TimeSlots.View',
  ARCHIVE: 'Permissions.TimeSlots.Archive',
  RETRIEVE: 'Permissions.TimeSlots.Retrieve'
};

export const PARAMETER = {
  CREATE: 'Permissions.Parameters.Create',
  EDIT: 'Permissions.Parameters.Edit',
  DELETE: 'Permissions.Parameters.Delete',
  VIEW: 'Permissions.Parameters.View',
  ARCHIVE: 'Permissions.Parameters.Archive',
  RETRIEVE: 'Permissions.Parameters.Retrieve'
};

export const DECOKING_NUMBER = {
  CREATE: 'Permissions.DecokingNumbers.Create',
  EDIT: 'Permissions.DecokingNumbers.Edit',
  DELETE: 'Permissions.DecokingNumbers.Delete',
  VIEW: 'Permissions.DecokingNumbers.View',
  ARCHIVE: 'Permissions.DecokingNumbers.Archive',
  RETRIEVE: 'Permissions.DecokingNumbers.Retrieve'
};

export const DECOKING_LOG = {
  CREATE: 'Permissions.DecokingLogs.Create',
  EDIT: 'Permissions.DecokingLogs.Edit',
  DELETE: 'Permissions.DecokingLogs.Delete',
  VIEW: 'Permissions.DecokingLogs.View',
  ARCHIVE: 'Permissions.DecokingLogs.Archive',
  RETRIEVE: 'Permissions.DecokingLogs.Retrieve',
  LOCK: 'Permissions.DecokingLogs.Lock',
  UNLOCK: 'Permissions.DecokingLogs.Unlock'
};

export const DECOKING_LABRATORY = {
  CREATE: 'Permissions.DecokingLabratories.Create',
  EDIT: 'Permissions.DecokingLabratories.Edit',
  DELETE: 'Permissions.DecokingLabratories.Delete',
  VIEW: 'Permissions.DecokingLabratories.View',
  ARCHIVE: 'Permissions.DecokingLabratories.Archive',
  RETRIEVE: 'Permissions.DecokingLabratories.Retrieve',
  LOCK: 'Permissions.DecokingLabratories.Lock',
  UNLOCK: 'Permissions.DecokingLabratories.Unlock'
};

export const SITE_REPORT_SETTING = {
  CREATE: 'Permissions.SiteReportSettings.Create',
  EDIT: 'Permissions.SiteReportSettings.Edit',
  DELETE: 'Permissions.SiteReportSettings.Delete',
  VIEW: 'Permissions.SiteReportSettings.View',
  ARCHIVE: 'Permissions.SiteReportSettings.Archive',
  RETRIEVE: 'Permissions.SiteReportSettings.Retrieve'
};

export const SITE_REPORTS = {
  CREATE: 'Permissions.SiteReports.Create',
  EDIT: 'Permissions.SiteReports.Edit',
  DELETE: 'Permissions.SiteReports.Delete',
  VIEW: 'Permissions.SiteReports.View',
  ARCHIVE: 'Permissions.SiteReports.Archive',
  RETRIEVE: 'Permissions.SiteReports.Retrieve',
  LOCK: 'Permissions.SiteReports.Lock',
  UNLOCK: 'Permissions.SiteReports.Unlock'
};

export const TANKS = {
  CREATE: 'Permissions.Tanks.Create',
  EDIT: 'Permissions.Tanks.Edit',
  DELETE: 'Permissions.Tanks.Delete',
  VIEW: 'Permissions.Tanks.View',
  ARCHIVE: 'Permissions.Tanks.Archive',
  RETRIEVE: 'Permissions.Tanks.Retrieve'
};

export const SHIFT_REPORT_SETTING = {
  CREATE: 'Permissions.ShiftReportSettings.Create',
  EDIT: 'Permissions.ShiftReportSettings.Edit',
  DELETE: 'Permissions.ShiftReportSettings.Delete',
  VIEW: 'Permissions.ShiftReportSettings.View',
  ARCHIVE: 'Permissions.ShiftReportSettings.Archive',
  RETRIEVE: 'Permissions.ShiftReportSettings.Retrieve'
};

export const SHIFT_REPORTS = {
  CREATE: 'Permissions.ShiftReports.Create',
  EDIT: 'Permissions.ShiftReports.Edit',
  DELETE: 'Permissions.ShiftReports.Delete',
  VIEW: 'Permissions.ShiftReports.View',
  ARCHIVE: 'Permissions.ShiftReports.Archive',
  RETRIEVE: 'Permissions.ShiftReports.Retrieve',
  LOCK: 'Permissions.ShiftReports.Lock',
  UNLOCK: 'Permissions.ShiftReports.Unlock'
};

export const REPORTS_PERMISSIONS = {
  DAILY_LOG_SHEET: 'Permissions.Reports.DailyLogSheet',
  MONTHLY_PRODUCTION: 'Permissions.Reports.MonthlyProduction',
  YEARLY_PRODUCTION: 'Permissions.Reports.YearlyProduction',
  DECOKIN_LABORATORY_RESULT: 'Permissions.Reports.DecokingLaboratoryResult',
  DECOKING_LOG_SHEET: 'Permissions.Reports.DecokingLogSheet',
  DECOKING_REPORT: 'Permissions.Reports.DecokingReport'
};
