import Swal from "sweetalert2";

export const swalAlert = (title, icon = "info", text = "") => {
    // icon: info, error, success, warning, question
  Swal.fire({
    title,
    text,
    icon,
  });
};

export const swalConfirm = (
  title,
  icon = "info",
  text = "",
  confirmButtonText = "Yes"
) => {
  return Swal.fire({
    title,
    text,
    icon,
    showCancelButton: true,
    confirmButtonText,
  });
};
