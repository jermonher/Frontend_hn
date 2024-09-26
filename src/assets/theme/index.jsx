/**
=========================================================
* Material Kit 2 React - v2.1.0
=========================================================
* Product Page: https://www.creative-tim.com/product/soft-ui-dashboard-pro-material-ui
* Copyright 2023 Creative Tim (https://www.creative-tim.com)
Coded by www.creative-tim.com
=========================================================
* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import { createTheme } from "@mui/material/styles";

// Material Kit 2 React base styles
import colors from "./base/colors"; // Ruta corregida
import breakpoints from "./base/breakpoints"; // Ruta corregida
import typography from "./base/typography"; // Ruta corregida
import boxShadows from "./base/boxShadows"; // Ruta corregida
import borders from "./base/borders"; // Ruta corregida
import globals from "./base/globals"; // Ruta corregida

// Material Kit 2 React helper functions
import boxShadow from "./functions/boxShadow"; // Ruta corregida
import hexToRgb from "./functions/hexToRgb"; // Ruta corregida
import linearGradient from "./functions/linearGradient"; // Ruta corregida
import pxToRem from "./functions/pxToRem"; // Ruta corregida
import rgba from "./functions/rgba"; // Ruta corregida

// Material Kit 2 React components base styles for @mui material components
import list from "./components/list"; // Ruta corregida
import listItem from "./components/list/listItem"; // Ruta corregida
import listItemText from "./components/list/listItemText"; // Ruta corregida
import card from "./components/card"; // Ruta corregida
import cardMedia from "./components/card/cardMedia"; // Ruta corregida
import cardContent from "./components/card/cardContent"; // Ruta corregida
import button from "./components/button"; // Ruta corregida
import iconButton from "./components/iconButton"; // Ruta corregida
import input from "./components/form/input"; // Ruta corregida
import inputLabel from "./components/form/inputLabel"; // Ruta corregida
import inputOutlined from "./components/form/inputOutlined"; // Ruta corregida
import textField from "./components/form/textField"; // Ruta corregida
import menu from "./components/menu"; // Ruta corregida
import menuItem from "./components/menu/menuItem"; // Ruta corregida
import switchButton from "./components/form/switchButton"; // Ruta corregida
import divider from "./components/divider"; // Ruta corregida
import tableContainer from "./components/table/tableContainer"; // Ruta corregida
import tableHead from "./components/table/tableHead"; // Ruta corregida
import tableCell from "./components/table/tableCell"; // Ruta corregida
import linearProgress from "./components/linearProgress"; // Ruta corregida
import breadcrumbs from "./components/breadcrumbs"; // Ruta corregida
import slider from "./components/slider"; // Ruta corregida
import avatar from "./components/avatar"; // Ruta corregida
import tooltip from "./components/tooltip"; // Ruta corregida
import appBar from "./components/appBar"; // Ruta corregida
import tabs from "./components/tabs"; // Ruta corregida
import tab from "./components/tabs/tab"; // Ruta corregida
import stepper from "./components/stepper"; // Ruta corregida
import step from "./components/stepper/step"; // Ruta corregida
import stepConnector from "./components/stepper/stepConnector"; // Ruta corregida
import stepLabel from "./components/stepper/stepLabel"; // Ruta corregida
import stepIcon from "./components/stepper/stepIcon"; // Ruta corregida
import select from "./components/form/select"; // Ruta corregida
import formControlLabel from "./components/form/formControlLabel"; // Ruta corregida
import formLabel from "./components/form/formLabel"; // Ruta corregida
import checkbox from "./components/form/checkbox"; // Ruta corregida
import radio from "./components/form/radio"; // Ruta corregida
import autocomplete from "./components/form/autocomplete"; // Ruta corregida
import flatpickr from "./components/flatpickr"; // Ruta corregida
import container from "./components/container"; // Ruta corregida
import popover from "./components/popover"; // Ruta corregida
import buttonBase from "./components/buttonBase"; // Ruta corregida
import icon from "./components/icon"; // Ruta corregida
import svgIcon from "./components/svgIcon"; // Ruta corregida
import link from "./components/link"; // Ruta corregida
import dialog from "./components/dialog"; // Ruta corregida
import dialogTitle from "./components/dialog/dialogTitle"; // Ruta corregida
import dialogContent from "./components/dialog/dialogContent"; // Ruta corregida
import dialogContentText from "./components/dialog/dialogContentText"; // Ruta corregida
import dialogActions from "./components/dialog/dialogActions"; // Ruta corregida

export default createTheme({
  breakpoints: { ...breakpoints },
  palette: { ...colors },
  typography: { ...typography },
  boxShadows: { ...boxShadows },
  borders: { ...borders },
  functions: {
    boxShadow,
    hexToRgb,
    linearGradient,
    pxToRem,
    rgba,
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        ...globals,
        ...flatpickr,
        ...container,
      },
    },
    MuiList: { ...list },
    MuiListItem: { ...listItem },
    MuiListItemText: { ...listItemText },
    MuiCard: { ...card },
    MuiCardMedia: { ...cardMedia },
    MuiCardContent: { ...cardContent },
    MuiButton: { ...button },
    MuiIconButton: { ...iconButton },
    MuiInput: { ...input },
    MuiInputLabel: { ...inputLabel },
    MuiOutlinedInput: { ...inputOutlined },
    MuiTextField: { ...textField },
    MuiMenu: { ...menu },
    MuiMenuItem: { ...menuItem },
    MuiSwitch: { ...switchButton },
    MuiDivider: { ...divider },
    MuiTableContainer: { ...tableContainer },
    MuiTableHead: { ...tableHead },
    MuiTableCell: { ...tableCell },
    MuiLinearProgress: { ...linearProgress },
    MuiBreadcrumbs: { ...breadcrumbs },
    MuiSlider: { ...slider },
    MuiAvatar: { ...avatar },
    MuiTooltip: { ...tooltip },
    MuiAppBar: { ...appBar },
    MuiTabs: { ...tabs },
    MuiTab: { ...tab },
    MuiStepper: { ...stepper },
    MuiStep: { ...step },
    MuiStepConnector: { ...stepConnector },
    MuiStepLabel: { ...stepLabel },
    MuiStepIcon: { ...stepIcon },
    MuiSelect: { ...select },
    MuiFormControlLabel: { ...formControlLabel },
    MuiFormLabel: { ...formLabel },
    MuiCheckbox: { ...checkbox },
    MuiRadio: { ...radio },
    MuiAutocomplete: { ...autocomplete },
    MuiPopover: { ...popover },
    MuiButtonBase: { ...buttonBase },
    MuiIcon: { ...icon },
    MuiSvgIcon: { ...svgIcon },
    MuiLink: { ...link },
    MuiDialog: { ...dialog },
    MuiDialogTitle: { ...dialogTitle },
    MuiDialogContent: { ...dialogContent },
    MuiDialogContentText: { ...dialogContentText },
    MuiDialogActions: { ...dialogActions },
  },
});
