import React from "react";
import { useCallback, useEffect, useState, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getAssets } from "../components/assetComp";

import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  IconButton,
} from "@mui/material";
import { Delete, Visibility } from "@mui/icons-material";
import { removeAsset } from "../components/assetComp";
import { Dialog } from "../commons/Dialog";
import { PageTitle } from "../commons/PageTitle";

const columns = [
  { id: "id_asset", label: "ID", minWidth: 50, align: "center" },
  { id: "name", label: "Nombre", minWidth: 50, align: "center" },
  { id: "type", label: "Tipo", minWidth: 50, align: "center" },
  { id: "code", label: "Código", minWidth: 50, align: "center" },
  { id: "id_employee", label: "ID Empleado", minWidth: 50, align: "center" },
  {
    id: "actions",
    label: "Acciones",
    minWidth: 50,
    align: "center",
    component: (asset, viewAction, deleteAction) => (
      <>
        <IconButton aria-label="view" onClick={() => viewAction(asset)}>
          <Visibility />
        </IconButton>

        <IconButton aria-label="delete" onClick={() => deleteAction(asset)}>
          <Delete />
        </IconButton>
      </>
    ),
  },
];
export const AssetList = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAssets());
  }, [dispatch]);

  const navigate = useNavigate();

  const assets = useSelector((state) => state.assetsSlice.assets);

  const [page, setPage] = useState(0);

  const [rowsPerPage, setRowsPerPage] = useState(5);

  const [assetToDelete, setAssetToDelete] = useState();

  

  const handleChangePage = useCallback((_, newPage) => setPage(newPage), []);

  const handleChangeRowsPerPage = useCallback((event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  }, []);

  const assetsToDisplay = useMemo(
    () => assets.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage),
    [assets, page, rowsPerPage]
  );

   const handleViewAction = useCallback(
    (asset) => navigate(`/asset/${asset.id_asset}`),
    [navigate]
  );

  const handleDeleteAction = useCallback(
    (asset) => setAssetToDelete(asset),
    []
  );

  const handleAcceptDialog = useCallback(() => {
    dispatch(removeAsset(assetToDelete));
    setAssetToDelete();
  }, [dispatch, assetToDelete]);

 
  return (
    <>
      <PageTitle>VortexInventary IT</PageTitle>
      <Paper sx={{ width: "100%" }}>
      <TableContainer sx={{ maxHeight: 500 }}>
        <Table>
        <TableHead>
        <TableRow>
        {columns.map((column) => (
        <TableCell
         key={column.id}
         align={column.align}
         style={{
         top: 57,
         minWidth: column.minWidth,
         fontWeight: "bold",
        }}
        >{column.label}
        </TableCell>
        ))}
        </TableRow>
        </TableHead>
        <TableBody>
        {assets.length ? (
            assetsToDisplay.map((row) => 
            (
            <TableRow hover tabIndex={-1} key={row.id_asset}>
            {columns.map((column) => {
            const value = row[column.id];
            return (
                    <TableCell key={column.id} align={column.align}>
                    {column.component
                    ? column.component(
                        row,
                        handleViewAction,
                         handleDeleteAction
                         )
                    : column.format
                    ? column.format(value)
                    : value}
                    </TableCell>
                    );
                    })}
            </TableRow>
            ))
            ) : (
            <TableRow>
            <TableCell
                colSpan={6}
                sx={{ color: "#9c27b0", textAlign: "center" }}
                >
                No data available.
                </TableCell>
                </TableRow>
              )}
            </TableBody>
            </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[5, 10, 25, 100]}
                component="div"
                count={assets.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
            </Paper>

      
      {assetToDelete && (
        <Dialog
          isOpen={true}
          title={`Eliminar>> ${assetToDelete.name}`}
          closeLabel="Cancelar"
          onClose={() => setAssetToDelete()}
          acceptLabel="Eliminar"
          onAccept={handleAcceptDialog}
        ></Dialog>
      )}
    </>
  );
};
