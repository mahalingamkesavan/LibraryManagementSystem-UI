export const UserValidation = (IsAdmin, AdminObject, UserObject) => {
  if (IsAdmin === "Admin") return AdminObject;
  else return UserObject;
};

export const AdminActionValidation = (IsAdmin, AdminObject, UserObject) => {
  if (IsAdmin === "Admin") return UserObject.concat(AdminObject);
  else return UserObject;
};
