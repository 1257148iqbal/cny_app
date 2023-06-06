import { Box, Grid, Paper } from "@mui/material";
import { makeStyles } from "@mui/styles";
import {
  ActionButtonGroup,
  ConfirmDialog,
  CustomTable,
  NewButton,
  Switch,
  CustomDrawer,
} from "app/components/CustomControls";
import {
  StyledTableCell,
  StyledTableRow,
} from "app/components/CustomControls/TableRowHeadCell";
import withSortBy from "app/components/HOC/withSortedBy";
import { USER } from "app/constants/ApiEndPoints";
import { http } from "app/services/httpService";
import { toastAlerts } from "app/utils/alerts";
import React, { useCallback, useEffect, useState } from "react";
import { trackPromise } from "react-promise-tracker";
import UserForm from "../form/UserForm";

const useStyles = makeStyles((theme) => ({
  toolbar: {
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(2),
  },
  newBtn: {
    padding: 10,
    paddingTop: 15,
    paddingBottom: 15,
  },
  filteredItems: {
    padding: 10,
    backgroundColor: "#ECF0F6",
    borderRadius: 5,
    margin: 10,
  },
  actionButton: {
    marginLeft: 5,
  },
  filterBoxBackground: {
    backgroundColor: "#FFFFFF",
  },
  btnPDF: {
    height: 40,
  },
}));

const ActiveUserList = (props) => {
  const classes = useStyles();
  const { sortedColumn, sortedBy, onSort } = props;

  //#region States
  const [state] = useState([
    {
      id: 1,
      name: "Md. Rahim",
      email: "rahim@gmail.com",
      mobile: "0181717171",
      designation: "User",
      isActive: true,
    },
    {
      id: 2,
      name: "Karim",
      email: "karim@gmail.com",
      mobile: "0181717171",
      designation: "User",
      isActive: false,
    },
  ]);
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const [activeDataLength] = React.useState(20);
  const [recordForEdit, setRecordForEdit] = React.useState(null);
  const [confirmDialog, setConfirmDialog] = React.useState({
    title: "",
    content: "",
    isOpen: false,
  });

  const [page, setPage] = React.useState(1);
  const [rowPerPage, setRowPerPage] = React.useState(10);

  //#endregion

  //#region Colums for Table
  const columns = [
    {
      sortName: "name",
      name: "name",
      label: "User Name",
      isDisableSorting: false,
    },
    {
      sortName: "email",
      name: "email",
      label: "Email",
      isDisableSorting: false,
    },
    {
      sortName: "mobile",
      name: "mobile",
      label: "Mobile",
      isDisableSorting: false,
    },
    {
      sortName: "designation",
      name: "designation",
      label: "Designation",
      isDisableSorting: false,
    },
    {
      name: "isActive",
      label: "Status",
      format: (value) => (value ? "Active" : "In-Active"),
      isDisableSorting: true,
    },
  ];
  //#endregion

  //#region UDF
  const getAllActiveUsers = useCallback(() => {
    const queryParam = {};

    trackPromise(
      http
        .get(`${USER.get_all}`)
        .then((res) => {
          const users = res.data.data;
          console.log(users);
        })
        .catch((err) => toastAlerts("warning", "This is Error"))
    );
  }, []);
  //#endregion

  //#region Hooks
  useEffect(() => {
    getAllActiveUsers();
  }, [getAllActiveUsers]);

  //#endregion

  //#region Events
  const onDrawerOpen = () => {
    setRecordForEdit(null);
    setDrawerOpen(true);
  };

  const onRowPerPageChange = (e) => {
    setRowPerPage(e.target.value);
    setPage(1);
  };

  const onPageChange = (event, pageNumber) => {
    setPage(pageNumber);
  };

  const onEdit = async (key) => {};

  const onDelete = (key) => {
    // setConfirmDialog({ ...confirmDialog, isOpen: false });
  };

  const onSubmit = (e, formValue) => {};

  //#endregion

  return (
    <Box>
      <Paper className={classes.root}>
        <Grid container>
          <Grid
            className={classes.newBtn}
            item
            container
            justifyContent="flex-start"
            xs={6}
            sm={6}
            md={6}
            lg={6}
          >
            <NewButton onClick={onDrawerOpen} appeared />
          </Grid>
        </Grid>
        <CustomTable
          columns={columns}
          rowPerPage={rowPerPage}
          onRowPerPageChange={onRowPerPageChange}
          count={Math.ceil(activeDataLength / rowPerPage)}
          onPageChange={onPageChange}
          sortedColumn={sortedColumn}
          sortedBy={sortedBy}
          onSort={onSort}
        >
          {state?.map((row) => (
            <StyledTableRow key={row.id}>
              <StyledTableCell>{row.name}</StyledTableCell>
              <StyledTableCell>{row.email}</StyledTableCell>
              <StyledTableCell>{row.mobile}</StyledTableCell>
              <StyledTableCell>{row.designation}</StyledTableCell>
              <StyledTableCell>
                <Switch checked={row.isActive} />
              </StyledTableCell>

              <StyledTableCell align="center">
                <ActionButtonGroup
                  appeared
                  onEdit={() => {
                    onEdit(row.key);
                  }}
                  onDelete={() => {
                    setConfirmDialog({
                      isOpen: true,
                      title: "Delete Department?",
                      content: "Are you sure to delete this department??",
                      onConfirm: () => onDelete(row.key),
                    });
                  }}
                />
                <ConfirmDialog
                  confirmDialog={confirmDialog}
                  setConfirmDialog={setConfirmDialog}
                  confirmButtonText="Delete"
                  cancelButtonText="Cancel"
                />
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </CustomTable>
      </Paper>

      <CustomDrawer
        drawerOpen={drawerOpen}
        setDrawerOpen={setDrawerOpen}
        title="UserForm"
      >
        <UserForm onSubmit={onSubmit} />
      </CustomDrawer>
    </Box>
  );
};

export default withSortBy(ActiveUserList, "name");
